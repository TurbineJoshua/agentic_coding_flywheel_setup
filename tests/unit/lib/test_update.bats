#!/usr/bin/env bats

load '../test_helper'

setup() {
    common_setup
    
    # update.sh logic relies on being sourced or executed
    # We source it.
    # It has a guard at the end `if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then main "$@"; fi`
    # When sourced by bats, this guard prevents main.
    
    # Mock environment for update.sh
    export HOME=$(create_temp_dir)
    export UPDATE_LOG_DIR="$HOME/.acfs/logs/updates"
    
    source_lib "update"
    
    # Mock date
    stub_command "date" "2025-01-01"
}

teardown() {
    common_teardown
}

@test "get_version: detects bun" {
    mkdir -p "$HOME/.bun/bin"
    # Create stub script at location
    cat > "$HOME/.bun/bin/bun" <<EOF
#!/bin/bash
echo "1.0.0"
EOF
    chmod +x "$HOME/.bun/bin/bun"
    
    run get_version "bun"
    assert_output "1.0.0"
}

@test "get_version: detects rust" {
    mkdir -p "$HOME/.cargo/bin"
    cat > "$HOME/.cargo/bin/rustc" <<EOF
#!/bin/bash
echo "rustc 1.75.0 (hash)"
EOF
    chmod +x "$HOME/.cargo/bin/rustc"
    
    run get_version "rust"
    assert_output "1.75.0"
}

@test "get_version: handles unknown" {
    run get_version "nonexistent"
    assert_output "unknown"
}

@test "capture_version: tracks changes" {
    mkdir -p "$HOME/.bun/bin"
    
    # Before
    cat > "$HOME/.bun/bin/bun" <<EOF
#!/bin/bash
echo "1.0.0"
EOF
    chmod +x "$HOME/.bun/bin/bun"
    
    capture_version_before "bun"
    assert_equal "${VERSION_BEFORE[bun]}" "1.0.0"
    
    # After (update)
    cat > "$HOME/.bun/bin/bun" <<EOF
#!/bin/bash
echo "1.0.1"
EOF
    chmod +x "$HOME/.bun/bin/bun"
    
    capture_version_after "bun"
    assert_equal "${VERSION_AFTER[bun]}" "1.0.1"
}

@test "update_cargo_tools: runs cargo install --force" {
    mkdir -p "$HOME/.cargo/bin"
    
    # Mock cargo
    local log_file="$HOME/cargo.log"
    cat > "$HOME/.cargo/bin/cargo" <<EOF
#!/bin/bash
echo "\$@" >> "$log_file"
EOF
    chmod +x "$HOME/.cargo/bin/cargo"
    
    # Mock existing tools so update_cargo_tools attempts update
    # sg needs to exist in PATH or .cargo/bin
    touch "$HOME/.cargo/bin/sg"
    chmod +x "$HOME/.cargo/bin/sg"
    
    # Mock get_version for sg
    # We need sg in PATH for get_version
    export PATH="$HOME/.cargo/bin:$PATH"
    cat > "$HOME/.cargo/bin/sg" <<EOF
#!/bin/bash
echo "0.1.0"
EOF
    chmod +x "$HOME/.cargo/bin/sg"
    
    # Run update
    UPDATE_RUNTIME=true
    run update_cargo_tools
    assert_success
    
    # Verify cargo install called
    run cat "$log_file"
    assert_output --partial "install ast-grep --locked --force"
}

@test "apt_lock_is_held: uses plain fuser when accessible" {
    init_stub_dir
    local lockfile="$HOME/dpkg.lock"
    local fuser_log="$HOME/fuser.log"
    : > "$lockfile"

    cat > "$STUB_DIR/fuser" <<EOF
#!/usr/bin/env bash
echo "\$*" >> "$fuser_log"
exit 0
EOF
    chmod +x "$STUB_DIR/fuser"

    run apt_lock_is_held "$lockfile"
    assert_success

    run cat "$fuser_log"
    assert_output --partial "$lockfile"
}

@test "apt_lock_is_held: falls back to sudo -n without prompting" {
    init_stub_dir
    local lockfile="$HOME/dpkg.lock"
    local sudo_log="$HOME/sudo.log"
    : > "$lockfile"

    cat > "$STUB_DIR/fuser" <<'EOF'
#!/usr/bin/env bash
exit 1
EOF
    chmod +x "$STUB_DIR/fuser"

    cat > "$STUB_DIR/sudo" <<EOF
#!/usr/bin/env bash
echo "\$*" >> "$sudo_log"
if [[ "\$1" == "-n" ]]; then
  exit 0
fi
exit 1
EOF
    chmod +x "$STUB_DIR/sudo"

    run apt_lock_is_held "$lockfile"
    assert_success

    run cat "$sudo_log"
    assert_output --partial "-n fuser $lockfile"
}

@test "update_require_security: sources repo-local scripts/lib/security.sh" {
    local repo_root
    local marker_file

    repo_root="$(create_temp_dir)"
    marker_file="$repo_root/security-sourced.marker"

    mkdir -p "$repo_root/scripts/lib"
    cat > "$repo_root/scripts/lib/security.sh" <<EOF
#!/usr/bin/env bash
load_checksums() {
    : > "$marker_file"
    return 0
}
EOF
    chmod +x "$repo_root/scripts/lib/security.sh"

    export ACFS_BIN_DIR="$repo_root/missing-bin"
    export ACFS_HOME="$repo_root/missing-home"
    export ACFS_REPO_ROOT="$repo_root"
    export CHECKSUMS_LOCAL="$repo_root/checksums.yaml"
    UPDATE_SECURITY_READY=false

    refresh_checksums() {
        return 0
    }

    run update_require_security
    assert_success
    [[ -f "$marker_file" ]]
}

@test "update_require_security: does not probe bogus repo path when ACFS_REPO_ROOT is unset" {
    export ACFS_BIN_DIR="$HOME/missing-bin"
    export ACFS_HOME="$HOME/missing-home"
    unset ACFS_REPO_ROOT
    export CHECKSUMS_LOCAL="$HOME/checksums.yaml"
    UPDATE_SECURITY_READY=false

    refresh_checksums() {
        return 0
    }

    run update_require_security
    assert_failure
    assert_output --partial "$ACFS_BIN_DIR/security.sh"
    assert_output --partial "$ACFS_HOME/scripts/lib/security.sh"
    refute_output --partial "    - /scripts/lib/security.sh"
}
