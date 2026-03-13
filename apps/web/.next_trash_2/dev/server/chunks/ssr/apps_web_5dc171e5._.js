module.exports = [
"[project]/apps/web/lib/generated/manifest-tools.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// AUTO-GENERATED FROM acfs.manifest.yaml — DO NOT EDIT
// Regenerate: bun run generate (from packages/manifest)
// ============================================================
__turbopack_context__.s([
    "manifestTools",
    ()=>manifestTools
]);
const manifestTools = [
    {
        id: "stack-agent_settings_backup",
        moduleId: "stack.agent_settings_backup",
        displayName: "Agent Settings Backup",
        shortName: "ASB",
        tagline: "Git-versioned backups for AI agent configs",
        shortDesc: "Smart backup tool for AI coding agent configuration folders (asb)",
        icon: "save",
        color: "#0EA5E9",
        href: "https://github.com/Dicklesworthstone/agent_settings_backup_script",
        features: [
            "Per-agent git repositories",
            "Full version history",
            "Easy restoration",
            "13+ agent type support"
        ],
        techStack: [
            "Bash",
            "Git",
            "rsync"
        ],
        useCases: [
            "Backing up Claude Code settings before experiments",
            "Restoring agent configs after reinstall",
            "Tracking config changes over time"
        ],
        language: "Bash",
        stars: 10,
        cliName: "asb",
        cliAliases: [],
        commandExample: "asb backup",
        lessonSlug: "asb"
    },
    {
        id: "stack-automated_plan_reviser",
        moduleId: "stack.automated_plan_reviser",
        displayName: "Automated Plan Reviser Pro",
        shortName: "APR",
        tagline: "Automated iterative spec refinement with extended AI reasoning",
        shortDesc: "Automated iterative spec refinement with extended AI reasoning (apr)",
        icon: "file-text",
        color: "#F59E0B",
        href: "https://github.com/Dicklesworthstone/automated_plan_reviser_pro",
        features: [
            "Automated multi-pass refinement",
            "Extended AI reasoning integration",
            "Markdown-based plan processing",
            "Progressive structure improvement"
        ],
        techStack: [
            "Bash",
            "Oracle CLI",
            "GPT Pro",
            "Markdown"
        ],
        useCases: [
            "Turning rough ideas into detailed specifications",
            "Catching architectural flaws early",
            "Creating implementation-ready plans for agents"
        ],
        language: "Bash",
        stars: 85,
        cliName: "apr",
        cliAliases: []
    },
    {
        id: "stack-beads_rust",
        moduleId: "stack.beads_rust",
        displayName: "beads_rust",
        shortName: "BR",
        tagline: "Local-first issue tracking for AI agents",
        shortDesc: "beads_rust (br) - Rust issue tracker with graph-aware dependencies",
        icon: "list-todo",
        color: "#F59E0B",
        href: "https://github.com/Dicklesworthstone/beads_rust",
        features: [
            "Local-first issue storage",
            "Dependency graph tracking",
            "Labels, priorities, comments",
            "JSON output for agents"
        ],
        techStack: [
            "Rust",
            "Serde",
            "JSONL"
        ],
        useCases: [
            "Tracking tasks that travel with the code",
            "Building dependency graphs",
            "Enabling agents to manage work queues"
        ],
        language: "Rust",
        stars: 128,
        cliName: "br",
        cliAliases: [],
        commandExample: "br ready --json"
    },
    {
        id: "stack-beads_viewer",
        moduleId: "stack.beads_viewer",
        displayName: "Beads Viewer",
        shortName: "BV",
        tagline: "Graph-theory triage engine for task prioritization",
        shortDesc: "bv TUI for Beads tasks",
        icon: "git-branch",
        color: "#10B981",
        href: "https://github.com/Dicklesworthstone/beads_viewer",
        features: [
            "PageRank-based issue prioritization",
            "Critical path analysis",
            "Robot mode for AI agent integration",
            "Interactive TUI with vim keybindings"
        ],
        techStack: [
            "Go",
            "Bubble Tea",
            "Lip Gloss",
            "Graph algorithms"
        ],
        useCases: [
            "Identifying which task unblocks the most other work",
            "Visualizing complex dependency graphs",
            "Generating execution plans for AI agents"
        ],
        language: "Go",
        stars: 891,
        cliName: "bv",
        cliAliases: [],
        commandExample: "bv --robot-triage"
    },
    {
        id: "stack-brenner_bot",
        moduleId: "stack.brenner_bot",
        displayName: "Brenner Bot",
        shortName: "Brenner",
        tagline: "Research orchestration inspired by Sydney Brenner",
        shortDesc: "Brenner Bot - research session manager with hypothesis tracking",
        icon: "flask-conical",
        color: "#F43F5E",
        href: "https://github.com/Dicklesworthstone/brenner_bot",
        features: [
            "Primary source corpus with citations",
            "Multi-agent research sessions",
            "Discriminative test ranking",
            "Adversarial critique generation"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "Agent Mail",
            "Multi-model AI"
        ],
        useCases: [
            "Structured hypothesis generation",
            "Multi-model research synthesis",
            "Scientific methodology workflows"
        ],
        language: "TypeScript",
        stars: 28,
        cliName: "brenner",
        cliAliases: []
    },
    {
        id: "stack-caam",
        moduleId: "stack.caam",
        displayName: "Coding Agent Account Manager",
        shortName: "CAAM",
        tagline: "Sub-100ms auth switching for AI coding agents",
        shortDesc: "Instant auth switching for agent CLIs",
        icon: "key-round",
        color: "#A855F7",
        href: "https://github.com/Dicklesworthstone/coding_agent_account_manager",
        features: [
            "Sub-100ms account switching",
            "Multi-provider support",
            "Automatic key rotation",
            "Session state preservation"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "Keychain"
        ],
        useCases: [
            "Switching between API keys when hitting rate limits",
            "Managing multiple agent accounts",
            "Automated credential rotation"
        ],
        language: "TypeScript",
        stars: 45,
        cliName: "caam",
        cliAliases: [],
        commandExample: "caam status"
    },
    {
        id: "stack-cass",
        moduleId: "stack.cass",
        displayName: "Coding Agent Session Search",
        shortName: "CASS",
        tagline: "Blazing-fast search across AI coding agent sessions",
        shortDesc: "Unified search across agent session history",
        icon: "search",
        color: "#06B6D4",
        href: "https://github.com/Dicklesworthstone/coding_agent_session_search",
        features: [
            "Unified search across all agent types",
            "Sub-second search over millions of messages",
            "Robot mode for AI agent integration",
            "TUI for interactive exploration"
        ],
        techStack: [
            "Rust",
            "Tantivy",
            "Ratatui",
            "JSONL parsing"
        ],
        useCases: [
            "Finding how a similar bug was fixed before",
            "Retrieving context from past project work",
            "Building on previous agent conversations"
        ],
        language: "Rust",
        stars: 307,
        cliName: "cass",
        cliAliases: [],
        commandExample: "cass search \"auth error\" --robot"
    },
    {
        id: "stack-cm",
        moduleId: "stack.cm",
        displayName: "CASS Memory System",
        shortName: "CM",
        tagline: "Procedural memory system for AI coding agents",
        shortDesc: "Procedural memory for agents (cass-memory)",
        icon: "brain",
        color: "#EC4899",
        href: "https://github.com/Dicklesworthstone/cass_memory_system",
        features: [
            "Three memory layers: episodic, working, procedural",
            "MCP integration for any compatible agent",
            "Automatic memory consolidation",
            "Cross-session context persistence"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "MCP Protocol",
            "SQLite"
        ],
        useCases: [
            "Remembering project conventions across sessions",
            "Learning from past debugging sessions",
            "Building institutional knowledge over time"
        ],
        language: "TypeScript",
        stars: 152,
        cliName: "cm",
        cliAliases: [],
        commandExample: "cm context \"task\" --json"
    },
    {
        id: "stack-cross_agent_session_resumer",
        moduleId: "stack.cross_agent_session_resumer",
        displayName: "Cross-Agent Session Resumer",
        shortName: "CASR",
        tagline: "Resume coding sessions across AI providers",
        shortDesc: "Cross-provider AI coding session resumption — convert and resume sessions across providers (casr)",
        icon: "repeat",
        color: "#D946EF",
        href: "https://github.com/Dicklesworthstone/cross_agent_session_resumer",
        features: [
            "Cross-provider session conversion",
            "Canonical session model",
            "14+ provider support",
            "Session diff and merge"
        ],
        techStack: [
            "Rust",
            "SQLite",
            "JSONL"
        ],
        useCases: [
            "Resuming a Claude session in Codex",
            "Migrating session history between providers",
            "Building unified session archives"
        ],
        language: "Rust",
        stars: 25,
        cliName: "casr",
        cliAliases: [],
        commandExample: "casr export --from claude",
        lessonSlug: "casr"
    },
    {
        id: "stack-dcg",
        moduleId: "stack.dcg",
        displayName: "Destructive Command Guard",
        shortName: "DCG",
        tagline: "SIMD-accelerated safety net for dangerous commands",
        shortDesc: "Destructive Command Guard - Claude Code hook blocking dangerous git/fs commands",
        icon: "shield-alert",
        color: "#EF4444",
        href: "https://github.com/Dicklesworthstone/destructive_command_guard",
        features: [
            "Intercepts rm -rf, git reset --hard, etc.",
            "SIMD-accelerated pattern matching",
            "Configurable allowlists",
            "Command audit logging"
        ],
        techStack: [
            "Rust",
            "SIMD",
            "Shell integration"
        ],
        useCases: [
            "Protecting against accidental data loss",
            "Auditing dangerous commands from agents",
            "Training wheels for new AI agent setups"
        ],
        language: "Rust",
        stars: 89,
        cliName: "dcg",
        cliAliases: [],
        commandExample: "dcg doctor"
    },
    {
        id: "stack-doodlestein_self_releaser",
        moduleId: "stack.doodlestein_self_releaser",
        displayName: "Doodlestein Self-Releaser",
        shortName: "DSR",
        tagline: "Fallback release infra when CI is throttled",
        shortDesc: "Fallback release infrastructure — local builds via act when GitHub Actions is throttled (dsr)",
        icon: "package",
        color: "#F97316",
        href: "https://github.com/Dicklesworthstone/doodlestein_self_releaser",
        features: [
            "Reuses existing GitHub Actions YAML",
            "Local builds via nektos/act",
            "Multi-platform support",
            "Artifact signing with minisign"
        ],
        techStack: [
            "Bash",
            "Docker",
            "act",
            "GitHub CLI"
        ],
        useCases: [
            "Releasing when GitHub Actions quota is exhausted",
            "Local release testing before push",
            "Cross-platform builds from single machine"
        ],
        language: "Bash",
        stars: 15,
        cliName: "dsr",
        cliAliases: [],
        commandExample: "dsr release",
        lessonSlug: "dsr"
    },
    {
        id: "stack-frankensearch",
        moduleId: "stack.frankensearch",
        displayName: "FrankenSearch",
        shortName: "FSFS",
        tagline: "Two-tier hybrid search with progressive delivery",
        shortDesc: "Two-tier hybrid local search — lexical (BM25) + semantic retrieval with progressive delivery (fsfs)",
        icon: "search",
        color: "#7C3AED",
        href: "https://github.com/Dicklesworthstone/frankensearch",
        features: [
            "BM25 lexical + semantic retrieval",
            "Progressive delivery (fast initial + quality refinement)",
            "Embedded ML models",
            "JSON API for agent integration"
        ],
        techStack: [
            "Rust",
            "Tantivy",
            "ONNX",
            "BM25"
        ],
        useCases: [
            "Local code and document search",
            "AI agent knowledge retrieval",
            "Hybrid search across project artifacts"
        ],
        language: "Rust",
        stars: 30,
        cliName: "fsfs",
        cliAliases: [],
        commandExample: "fsfs search \"query\"",
        lessonSlug: "fsfs"
    },
    {
        id: "stack-jeffreysprompts",
        moduleId: "stack.jeffreysprompts",
        displayName: "JeffreysPrompts CLI",
        shortName: "JFP",
        tagline: "Browse and install battle-tested prompts as Claude Code skills",
        shortDesc: "Curated battle-tested prompts for AI agents - browse and install as skills (jfp)",
        icon: "sparkles",
        color: "#EC4899",
        href: "https://jeffreysprompts.com",
        features: [
            "One-command skill installation",
            "Browsable prompt categories",
            "Claude Code skills integration",
            "MCP server for agent access"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "Claude Code Skills API"
        ],
        useCases: [
            "Bootstrapping a new project with proven prompts",
            "Discovering prompts for specific domains",
            "Sharing effective prompts across teams"
        ],
        language: "TypeScript",
        stars: 120,
        cliName: "jfp",
        cliAliases: []
    },
    {
        id: "stack-mcp_agent_mail",
        moduleId: "stack.mcp_agent_mail",
        displayName: "MCP Agent Mail",
        shortName: "Mail",
        tagline: "Like Gmail for AI coding agents",
        shortDesc: "Like gmail for coding agents; MCP HTTP server + token; installs beads tools",
        icon: "mail",
        color: "#8B5CF6",
        href: "https://github.com/Dicklesworthstone/mcp_agent_mail",
        features: [
            "Threaded messaging between AI agents",
            "Advisory file reservations",
            "SQLite-backed persistent storage",
            "MCP integration for any compatible agent"
        ],
        techStack: [
            "Python",
            "FastMCP",
            "FastAPI",
            "SQLite"
        ],
        useCases: [
            "Coordinating file ownership across parallel agents",
            "Passing context between session restarts",
            "Building audit trails of agent decisions"
        ],
        language: "Python",
        stars: 1400,
        cliName: "am",
        cliAliases: []
    },
    {
        id: "stack-meta_skill",
        moduleId: "stack.meta_skill",
        displayName: "Meta Skill",
        shortName: "MS",
        tagline: "Skill management with MCP integration and adaptive suggestions",
        shortDesc: "Local-first knowledge management with hybrid semantic search (ms)",
        icon: "sparkles",
        color: "#14B8A6",
        href: "https://github.com/Dicklesworthstone/meta_skill",
        features: [
            "MCP server for native AI agent integration",
            "Thompson sampling optimizes suggestions",
            "Multi-layer security",
            "Hybrid search with RRF"
        ],
        techStack: [
            "Rust",
            "SQLite",
            "Tantivy",
            "MCP"
        ],
        useCases: [
            "AI agents querying skills via MCP",
            "Building team-wide skill libraries",
            "Packaging and sharing skills"
        ],
        language: "Rust",
        stars: 10,
        cliName: "ms",
        cliAliases: []
    },
    {
        id: "stack-ntm",
        moduleId: "stack.ntm",
        displayName: "Named Tmux Manager",
        shortName: "NTM",
        tagline: "Agent cockpit for multi-agent tmux sessions",
        shortDesc: "Named tmux manager (agent cockpit)",
        icon: "layout-grid",
        color: "#0EA5E9",
        href: "https://github.com/Dicklesworthstone/ntm",
        features: [
            "Named agent panes with type classification",
            "Broadcast prompts to agent types",
            "Session persistence across reboots",
            "Dashboard view of active agents"
        ],
        techStack: [
            "Go",
            "Bubble Tea",
            "tmux"
        ],
        useCases: [
            "Running multiple Claude Code agents simultaneously",
            "Organizing dev environments by project",
            "Managing long-running agent sessions"
        ],
        language: "Go",
        stars: 69,
        cliName: "ntm",
        cliAliases: []
    },
    {
        id: "stack-pcr",
        moduleId: "stack.pcr",
        displayName: "Post-Compact Reminder",
        shortName: "PCR",
        tagline: "Stop Claude from forgetting project rules after compaction",
        shortDesc: "Post-compaction reminder hook for Claude Code that forces an AGENTS.md re-read",
        icon: "shield-alert",
        color: "#DC2626",
        href: "https://github.com/Dicklesworthstone/post_compact_reminder",
        features: [
            "Auto-detects compaction events",
            "Injects AGENTS.md re-read reminder",
            "Zero overhead when not compacting",
            "Configurable reminder text"
        ],
        techStack: [
            "Bash",
            "jq",
            "Claude Code hooks"
        ],
        useCases: [
            "Preventing rule amnesia after compaction",
            "Ensuring agents follow project conventions",
            "Maintaining consistency across long sessions"
        ],
        language: "Bash",
        stars: 40,
        cliName: "claude-post-compact-reminder",
        cliAliases: [
            "pcr"
        ],
        commandExample: "printf '{\"session_id\":\"demo\",\"source\":\"compact\"}\\n' | claude-post-compact-reminder",
        lessonSlug: "pcr"
    },
    {
        id: "stack-process_triage",
        moduleId: "stack.process_triage",
        displayName: "Process Triage",
        shortName: "PT",
        tagline: "Intelligent process termination with Bayesian scoring",
        shortDesc: "Find and terminate stuck/zombie processes with intelligent scoring (pt)",
        icon: "activity",
        color: "#EF4444",
        href: "https://github.com/Dicklesworthstone/process_triage",
        features: [
            "Intelligent process scoring",
            "Interactive TUI selection",
            "Robot mode for automation",
            "Resource usage analysis"
        ],
        techStack: [
            "Rust",
            "Bayesian inference",
            "procfs"
        ],
        useCases: [
            "Killing stuck build processes",
            "Cleaning up zombie processes",
            "Identifying memory hogs"
        ],
        language: "Rust",
        stars: 45,
        cliName: "pt",
        cliAliases: [],
        commandExample: "pt --robot --top 10",
        lessonSlug: "pt"
    },
    {
        id: "stack-rch",
        moduleId: "stack.rch",
        displayName: "Remote Compilation Helper",
        shortName: "RCH",
        tagline: "Transparent Rust build offloading to remote workers",
        shortDesc: "Remote Compilation Helper - transparent build offloading for AI coding agents",
        icon: "cpu",
        color: "#6366F1",
        href: "https://github.com/Dicklesworthstone/remote_compilation_helper",
        features: [
            "Transparent cargo interception",
            "Multi-worker pool with priority scheduling",
            "Incremental artifact sync",
            "Daemon mode with status monitoring"
        ],
        techStack: [
            "Rust",
            "rsync",
            "zstd",
            "SSH"
        ],
        useCases: [
            "Offloading builds during multi-agent sessions",
            "Reducing local CPU usage during heavy compilation",
            "Distributing builds across remote servers"
        ],
        language: "Rust",
        stars: 35,
        cliName: "rch",
        cliAliases: [],
        commandExample: "rch status",
        lessonSlug: "rch"
    },
    {
        id: "stack-ru",
        moduleId: "stack.ru",
        displayName: "Repo Updater",
        shortName: "RU",
        tagline: "Multi-repo sync with AI-driven commit automation",
        shortDesc: "Repo Updater - multi-repo sync + AI-driven commit automation",
        icon: "refresh-cw",
        color: "#F97316",
        href: "https://github.com/Dicklesworthstone/repo_updater",
        features: [
            "One-command multi-repo sync",
            "Parallel operations",
            "Conflict detection with resolution hints",
            "AI code review integration"
        ],
        techStack: [
            "Bash",
            "Git plumbing",
            "GitHub CLI"
        ],
        useCases: [
            "Keeping development machines in sync",
            "CI/CD repo management",
            "Automated codebase maintenance"
        ],
        language: "Bash",
        stars: 67,
        cliName: "ru",
        cliAliases: [],
        commandExample: "ru sync --parallel 4"
    },
    {
        id: "stack-slb",
        moduleId: "stack.slb",
        displayName: "Simultaneous Launch Button",
        shortName: "SLB",
        tagline: "Two-person rule for dangerous command approval",
        shortDesc: "Two-person rule for dangerous commands (optional guardrails)",
        icon: "shield-check",
        color: "#F59E0B",
        href: "https://github.com/Dicklesworthstone/simultaneous_launch_button",
        features: [
            "Two-person rule enforcement",
            "Command queue with approval workflow",
            "Pattern-based risk detection",
            "SQLite persistence"
        ],
        techStack: [
            "Go",
            "Bubble Tea",
            "SQLite"
        ],
        useCases: [
            "Requiring approval for rm -rf and git reset",
            "Adding safety gates to autonomous agent workflows",
            "Audit trail of dangerous command approvals"
        ],
        language: "Go",
        stars: 49,
        cliName: "slb",
        cliAliases: []
    },
    {
        id: "stack-srps",
        moduleId: "stack.srps",
        displayName: "System Resource Protection Script",
        shortName: "SRPS",
        tagline: "Auto-deprioritize background processes for responsive dev workstations",
        shortDesc: "System Resource Protection Script - ananicy-cpp rules + TUI monitor for responsive dev workstations",
        icon: "shield",
        color: "#EAB308",
        href: "https://github.com/Dicklesworthstone/system_resource_protection_script",
        features: [
            "Automatic process deprioritization",
            "Real-time TUI monitoring",
            "1700+ pre-configured rules",
            "Custom rule creation"
        ],
        techStack: [
            "Go",
            "C++",
            "ananicy-cpp",
            "systemd"
        ],
        useCases: [
            "Multi-agent coding sessions",
            "Large compilation jobs",
            "Heavy test suite runs"
        ],
        language: "Go",
        stars: 50,
        cliName: "sysmoni",
        cliAliases: []
    },
    {
        id: "stack-storage_ballast_helper",
        moduleId: "stack.storage_ballast_helper",
        displayName: "Storage Ballast Helper",
        shortName: "SBH",
        tagline: "Predictive disk-pressure defense for AI workloads",
        shortDesc: "Cross-platform disk-pressure defense for AI coding workloads (sbh)",
        icon: "hard-drive",
        color: "#059669",
        href: "https://github.com/Dicklesworthstone/storage_ballast_helper",
        features: [
            "Predictive disk space monitoring",
            "Safe cleanup policies",
            "Ballast file release",
            "Explainable policy decisions"
        ],
        techStack: [
            "Rust",
            "SQLite",
            "procfs"
        ],
        useCases: [
            "Preventing disk-full failures during builds",
            "Automated cleanup of build artifacts",
            "Monitoring disk usage across projects"
        ],
        language: "Rust",
        stars: 20,
        cliName: "sbh",
        cliAliases: [],
        commandExample: "sbh status",
        lessonSlug: "sbh"
    },
    {
        id: "stack-ultimate_bug_scanner",
        moduleId: "stack.ultimate_bug_scanner",
        displayName: "Ultimate Bug Scanner",
        shortName: "UBS",
        tagline: "Pattern-based bug scanner with 1000+ detection rules",
        shortDesc: "UBS bug scanning (easy-mode)",
        icon: "bug",
        color: "#F43F5E",
        href: "https://github.com/Dicklesworthstone/ultimate_bug_scanner",
        features: [
            "1000+ built-in detection patterns",
            "Consistent JSON output format",
            "Multi-language support",
            "Perfect for pre-commit hooks"
        ],
        techStack: [
            "Bash",
            "Pattern matching",
            "JSON output"
        ],
        useCases: [
            "Pre-commit validation across polyglot repos",
            "CI/CD pipeline integration",
            "Catching AI-generated code errors"
        ],
        language: "Bash",
        stars: 132,
        cliName: "ubs",
        cliAliases: [],
        commandExample: "ubs file.ts"
    },
    {
        id: "stack-wezterm_automata",
        moduleId: "stack.wezterm_automata",
        displayName: "WezTerm Automata",
        shortName: "WA",
        tagline: "Terminal hypervisor for multi-agent automation",
        shortDesc: "WezTerm Automata (wa) - terminal automation and orchestration for AI agents",
        icon: "monitor",
        color: "#06B6D4",
        href: "https://github.com/Dicklesworthstone/wezterm_automata",
        features: [
            "Real-time terminal observation",
            "Intelligent pattern detection",
            "Robot Mode JSON API",
            "Event-driven automation"
        ],
        techStack: [
            "Rust",
            "WezTerm API",
            "SQLite FTS5"
        ],
        useCases: [
            "Detecting agent rate limits and errors",
            "Coordinating multi-agent workflows",
            "Searching across captured terminal sessions"
        ],
        language: "Rust",
        stars: 42,
        cliName: "wa",
        cliAliases: []
    },
    {
        id: "utils-aadc",
        moduleId: "utils.aadc",
        displayName: "ASCII Art Diagram Corrector",
        shortName: "AADC",
        tagline: "Fix malformed ASCII diagrams from AI output",
        shortDesc: "aadc - ASCII diagram corrector for fixing malformed ASCII art",
        icon: "align-left",
        color: "#EC4899",
        href: "https://github.com/Dicklesworthstone/aadc",
        features: [
            "Auto-repair box alignment",
            "Connector line fixing",
            "Before/after diff preview",
            "Clipboard integration"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Fixing AI-generated architecture diagrams",
            "Cleaning up ASCII flowcharts",
            "Producing clean documentation"
        ],
        language: "Rust",
        cliName: "aadc",
        cliAliases: []
    },
    {
        id: "utils-caut",
        moduleId: "utils.caut",
        displayName: "Coding Agent Usage Tracker",
        shortName: "CAUT",
        tagline: "Track LLM provider usage and costs across agents",
        shortDesc: "coding_agent_usage_tracker (caut) - LLM provider usage tracker",
        icon: "bar-chart-3",
        color: "#14B8A6",
        href: "https://github.com/Dicklesworthstone/coding_agent_usage_tracker",
        features: [
            "Multi-provider usage aggregation",
            "Per-session token breakdown",
            "Cost estimation and trends",
            "Export to CSV/JSON"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Monitoring daily API spend",
            "Comparing provider costs",
            "Optimizing agent token usage"
        ],
        language: "Rust",
        cliName: "caut",
        cliAliases: []
    },
    {
        id: "utils-csctf",
        moduleId: "utils.csctf",
        displayName: "Chat Shared Conversation to File",
        shortName: "CSCTF",
        tagline: "Convert AI chat share links to Markdown and HTML",
        shortDesc: "Chat Shared Conversation to File - convert AI share links to Markdown/HTML",
        icon: "file-text",
        color: "#8B5CF6",
        href: "https://github.com/Dicklesworthstone/csctf",
        features: [
            "Multi-provider support (ChatGPT, Claude, Gemini, Grok)",
            "Dual Markdown + HTML output",
            "Code block preservation",
            "Batch URL processing"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Archiving important AI conversations",
            "Preserving code solutions from chat",
            "Building a local knowledge base from AI interactions"
        ],
        language: "Rust",
        cliName: "csctf",
        cliAliases: []
    },
    {
        id: "utils-giil",
        moduleId: "utils.giil",
        displayName: "Get Image from Internet Link",
        shortName: "GIIL",
        tagline: "Download cloud images for visual debugging",
        shortDesc: "Get Image from Internet Link - download cloud images for visual debugging",
        icon: "image",
        color: "#64748B",
        href: "https://github.com/Dicklesworthstone/giil",
        features: [
            "iCloud share link support",
            "CLI-based image download",
            "No browser required",
            "Works over SSH"
        ],
        techStack: [
            "Bash",
            "curl",
            "iCloud API"
        ],
        useCases: [
            "Sharing screenshots for remote debugging",
            "Getting images to headless servers",
            "AI agent image analysis workflows"
        ],
        language: "Bash",
        stars: 24,
        cliName: "giil",
        cliAliases: []
    },
    {
        id: "utils-mdwb",
        moduleId: "utils.mdwb",
        displayName: "Markdown Web Browser",
        shortName: "MDWB",
        tagline: "Convert web pages to clean Markdown for AI consumption",
        shortDesc: "markdown_web_browser (mdwb) - Convert websites to Markdown for LLM consumption",
        icon: "globe",
        color: "#10B981",
        href: "https://github.com/Dicklesworthstone/markdown_web_browser",
        features: [
            "Clean content extraction",
            "Code block preservation",
            "Link handling",
            "Pipe-friendly output"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Feeding documentation to AI agents",
            "Archiving web content locally",
            "Building LLM-ready research corpora"
        ],
        language: "Rust",
        cliName: "mdwb",
        cliAliases: []
    },
    {
        id: "utils-rano",
        moduleId: "utils.rano",
        displayName: "Network Observer",
        shortName: "RANO",
        tagline: "Monitor AI CLI network traffic for debugging and analysis",
        shortDesc: "rano - Network observer for AI CLIs with request/response logging",
        icon: "network",
        color: "#F59E0B",
        href: "https://github.com/Dicklesworthstone/rano",
        features: [
            "Transparent HTTP proxy interception",
            "Provider-aware log parsing",
            "Token and cost tracking",
            "Real-time traffic monitoring"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Debugging unexpected agent behavior",
            "Tracking API token consumption",
            "Analyzing prompt efficiency"
        ],
        language: "Rust",
        cliName: "rano",
        cliAliases: []
    },
    {
        id: "utils-rust_proxy",
        moduleId: "utils.rust_proxy",
        displayName: "Rust Proxy",
        shortName: "RP",
        tagline: "Transparent proxy routing for network traffic debugging",
        shortDesc: "rust_proxy - Transparent proxy routing for debugging network traffic",
        icon: "shield",
        color: "#6366F1",
        href: "https://github.com/Dicklesworthstone/rust_proxy",
        features: [
            "Transparent HTTP/HTTPS proxying",
            "Request/response logging",
            "Latency measurement",
            "Header inspection"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Debugging API communication issues",
            "Measuring request latency",
            "Inspecting headers and payloads"
        ],
        language: "Rust",
        cliName: "rust_proxy",
        cliAliases: []
    },
    {
        id: "utils-s2p",
        moduleId: "utils.s2p",
        displayName: "Source to Prompt TUI",
        shortName: "S2P",
        tagline: "Interactive code-to-prompt generator with token counting",
        shortDesc: "source_to_prompt_tui (s2p) - Code to LLM prompt generator with TUI",
        icon: "file-code",
        color: "#22C55E",
        href: "https://github.com/Dicklesworthstone/source_to_prompt_tui",
        features: [
            "Interactive file selection",
            "Real-time token counting",
            "Clipboard integration",
            "Gitignore-aware filtering"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "React",
            "Ink",
            "tiktoken"
        ],
        useCases: [
            "Preparing code context for Claude/GPT",
            "Creating reproducible prompt templates",
            "Managing context window budget"
        ],
        language: "TypeScript",
        stars: 78,
        cliName: "s2p",
        cliAliases: []
    },
    {
        id: "utils-toon_rust",
        moduleId: "utils.toon_rust",
        displayName: "Token-Optimized Notation",
        shortName: "TRU",
        tagline: "Compress source code for maximum LLM context efficiency",
        shortDesc: "toon_rust (tru) - Token-optimized notation format for LLM context efficiency",
        icon: "minimize-2",
        color: "#06B6D4",
        href: "https://github.com/Dicklesworthstone/toon_rust",
        features: [
            "40-70% token count reduction",
            "Multi-language support",
            "Token count statistics",
            "Reversible compression"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Fitting more code context into LLM requests",
            "Reducing API costs for large codebases",
            "Preparing code for context-limited models"
        ],
        language: "Rust",
        cliName: "tru",
        cliAliases: []
    },
    {
        id: "utils-xf",
        moduleId: "utils.xf",
        displayName: "X Archive Search",
        shortName: "XF",
        tagline: "Ultra-fast search over X/Twitter data archives",
        shortDesc: "xf - Ultra-fast X/Twitter archive search with Tantivy",
        icon: "archive",
        color: "#3B82F6",
        href: "https://github.com/Dicklesworthstone/xf",
        features: [
            "Sub-second search over large archives",
            "Semantic + keyword hybrid search",
            "No external API dependencies",
            "Privacy-preserving local processing"
        ],
        techStack: [
            "Rust",
            "Tantivy",
            "Hash embeddings",
            "RRF"
        ],
        useCases: [
            "Finding bookmarked threads",
            "Researching past discussions",
            "Building on ideas from tweet history"
        ],
        language: "Rust",
        stars: 156,
        cliName: "xf",
        cliAliases: []
    }
];
}),
"[project]/apps/web/lib/generated/manifest-tldr.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// AUTO-GENERATED FROM acfs.manifest.yaml — DO NOT EDIT
// Regenerate: bun run generate (from packages/manifest)
// ============================================================
__turbopack_context__.s([
    "manifestTldrTools",
    ()=>manifestTldrTools
]);
const manifestTldrTools = [
    {
        id: "stack-agent_settings_backup",
        moduleId: "stack.agent_settings_backup",
        displayName: "Agent Settings Backup",
        shortName: "ASB",
        tagline: "Git-versioned backups for AI agent configs",
        tldrSnippet: "Smart backup tool for AI coding agent configuration folders (asb)",
        icon: "save",
        color: "#0EA5E9",
        href: "https://github.com/Dicklesworthstone/agent_settings_backup_script",
        features: [
            "Per-agent git repositories",
            "Full version history",
            "Easy restoration",
            "13+ agent type support"
        ],
        techStack: [
            "Bash",
            "Git",
            "rsync"
        ],
        useCases: [
            "Backing up Claude Code settings before experiments",
            "Restoring agent configs after reinstall",
            "Tracking config changes over time"
        ],
        language: "Bash",
        stars: 10
    },
    {
        id: "stack-automated_plan_reviser",
        moduleId: "stack.automated_plan_reviser",
        displayName: "Automated Plan Reviser Pro",
        shortName: "APR",
        tagline: "Automated iterative spec refinement with extended AI reasoning",
        tldrSnippet: "Automated iterative spec refinement with extended AI reasoning (apr)",
        icon: "file-text",
        color: "#F59E0B",
        href: "https://github.com/Dicklesworthstone/automated_plan_reviser_pro",
        features: [
            "Automated multi-pass refinement",
            "Extended AI reasoning integration",
            "Markdown-based plan processing",
            "Progressive structure improvement"
        ],
        techStack: [
            "Bash",
            "Oracle CLI",
            "GPT Pro",
            "Markdown"
        ],
        useCases: [
            "Turning rough ideas into detailed specifications",
            "Catching architectural flaws early",
            "Creating implementation-ready plans for agents"
        ],
        language: "Bash",
        stars: 85
    },
    {
        id: "stack-beads_rust",
        moduleId: "stack.beads_rust",
        displayName: "beads_rust",
        shortName: "BR",
        tagline: "Local-first issue tracking for AI agents",
        tldrSnippet: "beads_rust (br) - Rust issue tracker with graph-aware dependencies",
        icon: "list-todo",
        color: "#F59E0B",
        href: "https://github.com/Dicklesworthstone/beads_rust",
        features: [
            "Local-first issue storage",
            "Dependency graph tracking",
            "Labels, priorities, comments",
            "JSON output for agents"
        ],
        techStack: [
            "Rust",
            "Serde",
            "JSONL"
        ],
        useCases: [
            "Tracking tasks that travel with the code",
            "Building dependency graphs",
            "Enabling agents to manage work queues"
        ],
        language: "Rust",
        stars: 128
    },
    {
        id: "stack-beads_viewer",
        moduleId: "stack.beads_viewer",
        displayName: "Beads Viewer",
        shortName: "BV",
        tagline: "Graph-theory triage engine for task prioritization",
        tldrSnippet: "bv TUI for Beads tasks",
        icon: "git-branch",
        color: "#10B981",
        href: "https://github.com/Dicklesworthstone/beads_viewer",
        features: [
            "PageRank-based issue prioritization",
            "Critical path analysis",
            "Robot mode for AI agent integration",
            "Interactive TUI with vim keybindings"
        ],
        techStack: [
            "Go",
            "Bubble Tea",
            "Lip Gloss",
            "Graph algorithms"
        ],
        useCases: [
            "Identifying which task unblocks the most other work",
            "Visualizing complex dependency graphs",
            "Generating execution plans for AI agents"
        ],
        language: "Go",
        stars: 891
    },
    {
        id: "stack-brenner_bot",
        moduleId: "stack.brenner_bot",
        displayName: "Brenner Bot",
        shortName: "Brenner",
        tagline: "Research orchestration inspired by Sydney Brenner",
        tldrSnippet: "Brenner Bot - research session manager with hypothesis tracking",
        icon: "flask-conical",
        color: "#F43F5E",
        href: "https://github.com/Dicklesworthstone/brenner_bot",
        features: [
            "Primary source corpus with citations",
            "Multi-agent research sessions",
            "Discriminative test ranking",
            "Adversarial critique generation"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "Agent Mail",
            "Multi-model AI"
        ],
        useCases: [
            "Structured hypothesis generation",
            "Multi-model research synthesis",
            "Scientific methodology workflows"
        ],
        language: "TypeScript",
        stars: 28
    },
    {
        id: "stack-caam",
        moduleId: "stack.caam",
        displayName: "Coding Agent Account Manager",
        shortName: "CAAM",
        tagline: "Sub-100ms auth switching for AI coding agents",
        tldrSnippet: "Instant auth switching for agent CLIs",
        icon: "key-round",
        color: "#A855F7",
        href: "https://github.com/Dicklesworthstone/coding_agent_account_manager",
        features: [
            "Sub-100ms account switching",
            "Multi-provider support",
            "Automatic key rotation",
            "Session state preservation"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "Keychain"
        ],
        useCases: [
            "Switching between API keys when hitting rate limits",
            "Managing multiple agent accounts",
            "Automated credential rotation"
        ],
        language: "TypeScript",
        stars: 45
    },
    {
        id: "stack-cass",
        moduleId: "stack.cass",
        displayName: "Coding Agent Session Search",
        shortName: "CASS",
        tagline: "Blazing-fast search across AI coding agent sessions",
        tldrSnippet: "Unified search across agent session history",
        icon: "search",
        color: "#06B6D4",
        href: "https://github.com/Dicklesworthstone/coding_agent_session_search",
        features: [
            "Unified search across all agent types",
            "Sub-second search over millions of messages",
            "Robot mode for AI agent integration",
            "TUI for interactive exploration"
        ],
        techStack: [
            "Rust",
            "Tantivy",
            "Ratatui",
            "JSONL parsing"
        ],
        useCases: [
            "Finding how a similar bug was fixed before",
            "Retrieving context from past project work",
            "Building on previous agent conversations"
        ],
        language: "Rust",
        stars: 307
    },
    {
        id: "stack-cm",
        moduleId: "stack.cm",
        displayName: "CASS Memory System",
        shortName: "CM",
        tagline: "Procedural memory system for AI coding agents",
        tldrSnippet: "Procedural memory for agents (cass-memory)",
        icon: "brain",
        color: "#EC4899",
        href: "https://github.com/Dicklesworthstone/cass_memory_system",
        features: [
            "Three memory layers: episodic, working, procedural",
            "MCP integration for any compatible agent",
            "Automatic memory consolidation",
            "Cross-session context persistence"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "MCP Protocol",
            "SQLite"
        ],
        useCases: [
            "Remembering project conventions across sessions",
            "Learning from past debugging sessions",
            "Building institutional knowledge over time"
        ],
        language: "TypeScript",
        stars: 152
    },
    {
        id: "stack-cross_agent_session_resumer",
        moduleId: "stack.cross_agent_session_resumer",
        displayName: "Cross-Agent Session Resumer",
        shortName: "CASR",
        tagline: "Resume coding sessions across AI providers",
        tldrSnippet: "Cross-provider AI coding session resumption — convert and resume sessions across providers (casr)",
        icon: "repeat",
        color: "#D946EF",
        href: "https://github.com/Dicklesworthstone/cross_agent_session_resumer",
        features: [
            "Cross-provider session conversion",
            "Canonical session model",
            "14+ provider support",
            "Session diff and merge"
        ],
        techStack: [
            "Rust",
            "SQLite",
            "JSONL"
        ],
        useCases: [
            "Resuming a Claude session in Codex",
            "Migrating session history between providers",
            "Building unified session archives"
        ],
        language: "Rust",
        stars: 25
    },
    {
        id: "stack-dcg",
        moduleId: "stack.dcg",
        displayName: "Destructive Command Guard",
        shortName: "DCG",
        tagline: "SIMD-accelerated safety net for dangerous commands",
        tldrSnippet: "Destructive Command Guard - Claude Code hook blocking dangerous git/fs commands",
        icon: "shield-alert",
        color: "#EF4444",
        href: "https://github.com/Dicklesworthstone/destructive_command_guard",
        features: [
            "Intercepts rm -rf, git reset --hard, etc.",
            "SIMD-accelerated pattern matching",
            "Configurable allowlists",
            "Command audit logging"
        ],
        techStack: [
            "Rust",
            "SIMD",
            "Shell integration"
        ],
        useCases: [
            "Protecting against accidental data loss",
            "Auditing dangerous commands from agents",
            "Training wheels for new AI agent setups"
        ],
        language: "Rust",
        stars: 89
    },
    {
        id: "stack-doodlestein_self_releaser",
        moduleId: "stack.doodlestein_self_releaser",
        displayName: "Doodlestein Self-Releaser",
        shortName: "DSR",
        tagline: "Fallback release infra when CI is throttled",
        tldrSnippet: "Fallback release infrastructure — local builds via act when GitHub Actions is throttled (dsr)",
        icon: "package",
        color: "#F97316",
        href: "https://github.com/Dicklesworthstone/doodlestein_self_releaser",
        features: [
            "Reuses existing GitHub Actions YAML",
            "Local builds via nektos/act",
            "Multi-platform support",
            "Artifact signing with minisign"
        ],
        techStack: [
            "Bash",
            "Docker",
            "act",
            "GitHub CLI"
        ],
        useCases: [
            "Releasing when GitHub Actions quota is exhausted",
            "Local release testing before push",
            "Cross-platform builds from single machine"
        ],
        language: "Bash",
        stars: 15
    },
    {
        id: "stack-frankensearch",
        moduleId: "stack.frankensearch",
        displayName: "FrankenSearch",
        shortName: "FSFS",
        tagline: "Two-tier hybrid search with progressive delivery",
        tldrSnippet: "Two-tier hybrid local search — lexical (BM25) + semantic retrieval with progressive delivery (fsfs)",
        icon: "search",
        color: "#7C3AED",
        href: "https://github.com/Dicklesworthstone/frankensearch",
        features: [
            "BM25 lexical + semantic retrieval",
            "Progressive delivery (fast initial + quality refinement)",
            "Embedded ML models",
            "JSON API for agent integration"
        ],
        techStack: [
            "Rust",
            "Tantivy",
            "ONNX",
            "BM25"
        ],
        useCases: [
            "Local code and document search",
            "AI agent knowledge retrieval",
            "Hybrid search across project artifacts"
        ],
        language: "Rust",
        stars: 30
    },
    {
        id: "stack-jeffreysprompts",
        moduleId: "stack.jeffreysprompts",
        displayName: "JeffreysPrompts CLI",
        shortName: "JFP",
        tagline: "Browse and install battle-tested prompts as Claude Code skills",
        tldrSnippet: "Curated battle-tested prompts for AI agents - browse and install as skills (jfp)",
        icon: "sparkles",
        color: "#EC4899",
        href: "https://jeffreysprompts.com",
        features: [
            "One-command skill installation",
            "Browsable prompt categories",
            "Claude Code skills integration",
            "MCP server for agent access"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "Claude Code Skills API"
        ],
        useCases: [
            "Bootstrapping a new project with proven prompts",
            "Discovering prompts for specific domains",
            "Sharing effective prompts across teams"
        ],
        language: "TypeScript",
        stars: 120
    },
    {
        id: "stack-mcp_agent_mail",
        moduleId: "stack.mcp_agent_mail",
        displayName: "MCP Agent Mail",
        shortName: "Mail",
        tagline: "Like Gmail for AI coding agents",
        tldrSnippet: "Like gmail for coding agents; MCP HTTP server + token; installs beads tools",
        icon: "mail",
        color: "#8B5CF6",
        href: "https://github.com/Dicklesworthstone/mcp_agent_mail",
        features: [
            "Threaded messaging between AI agents",
            "Advisory file reservations",
            "SQLite-backed persistent storage",
            "MCP integration for any compatible agent"
        ],
        techStack: [
            "Python",
            "FastMCP",
            "FastAPI",
            "SQLite"
        ],
        useCases: [
            "Coordinating file ownership across parallel agents",
            "Passing context between session restarts",
            "Building audit trails of agent decisions"
        ],
        language: "Python",
        stars: 1400
    },
    {
        id: "stack-meta_skill",
        moduleId: "stack.meta_skill",
        displayName: "Meta Skill",
        shortName: "MS",
        tagline: "Skill management with MCP integration and adaptive suggestions",
        tldrSnippet: "Local-first knowledge management with hybrid semantic search (ms)",
        icon: "sparkles",
        color: "#14B8A6",
        href: "https://github.com/Dicklesworthstone/meta_skill",
        features: [
            "MCP server for native AI agent integration",
            "Thompson sampling optimizes suggestions",
            "Multi-layer security",
            "Hybrid search with RRF"
        ],
        techStack: [
            "Rust",
            "SQLite",
            "Tantivy",
            "MCP"
        ],
        useCases: [
            "AI agents querying skills via MCP",
            "Building team-wide skill libraries",
            "Packaging and sharing skills"
        ],
        language: "Rust",
        stars: 10
    },
    {
        id: "stack-ntm",
        moduleId: "stack.ntm",
        displayName: "Named Tmux Manager",
        shortName: "NTM",
        tagline: "Agent cockpit for multi-agent tmux sessions",
        tldrSnippet: "Named tmux manager (agent cockpit)",
        icon: "layout-grid",
        color: "#0EA5E9",
        href: "https://github.com/Dicklesworthstone/ntm",
        features: [
            "Named agent panes with type classification",
            "Broadcast prompts to agent types",
            "Session persistence across reboots",
            "Dashboard view of active agents"
        ],
        techStack: [
            "Go",
            "Bubble Tea",
            "tmux"
        ],
        useCases: [
            "Running multiple Claude Code agents simultaneously",
            "Organizing dev environments by project",
            "Managing long-running agent sessions"
        ],
        language: "Go",
        stars: 69
    },
    {
        id: "stack-pcr",
        moduleId: "stack.pcr",
        displayName: "Post-Compact Reminder",
        shortName: "PCR",
        tagline: "Stop Claude from forgetting project rules after compaction",
        tldrSnippet: "Post-compaction reminder hook for Claude Code that forces an AGENTS.md re-read",
        icon: "shield-alert",
        color: "#DC2626",
        href: "https://github.com/Dicklesworthstone/post_compact_reminder",
        features: [
            "Auto-detects compaction events",
            "Injects AGENTS.md re-read reminder",
            "Zero overhead when not compacting",
            "Configurable reminder text"
        ],
        techStack: [
            "Bash",
            "jq",
            "Claude Code hooks"
        ],
        useCases: [
            "Preventing rule amnesia after compaction",
            "Ensuring agents follow project conventions",
            "Maintaining consistency across long sessions"
        ],
        language: "Bash",
        stars: 40
    },
    {
        id: "stack-process_triage",
        moduleId: "stack.process_triage",
        displayName: "Process Triage",
        shortName: "PT",
        tagline: "Intelligent process termination with Bayesian scoring",
        tldrSnippet: "Find and terminate stuck/zombie processes with intelligent scoring (pt)",
        icon: "activity",
        color: "#EF4444",
        href: "https://github.com/Dicklesworthstone/process_triage",
        features: [
            "Intelligent process scoring",
            "Interactive TUI selection",
            "Robot mode for automation",
            "Resource usage analysis"
        ],
        techStack: [
            "Rust",
            "Bayesian inference",
            "procfs"
        ],
        useCases: [
            "Killing stuck build processes",
            "Cleaning up zombie processes",
            "Identifying memory hogs"
        ],
        language: "Rust",
        stars: 45
    },
    {
        id: "stack-rch",
        moduleId: "stack.rch",
        displayName: "Remote Compilation Helper",
        shortName: "RCH",
        tagline: "Transparent Rust build offloading to remote workers",
        tldrSnippet: "Remote Compilation Helper - transparent build offloading for AI coding agents",
        icon: "cpu",
        color: "#6366F1",
        href: "https://github.com/Dicklesworthstone/remote_compilation_helper",
        features: [
            "Transparent cargo interception",
            "Multi-worker pool with priority scheduling",
            "Incremental artifact sync",
            "Daemon mode with status monitoring"
        ],
        techStack: [
            "Rust",
            "rsync",
            "zstd",
            "SSH"
        ],
        useCases: [
            "Offloading builds during multi-agent sessions",
            "Reducing local CPU usage during heavy compilation",
            "Distributing builds across remote servers"
        ],
        language: "Rust",
        stars: 35
    },
    {
        id: "stack-ru",
        moduleId: "stack.ru",
        displayName: "Repo Updater",
        shortName: "RU",
        tagline: "Multi-repo sync with AI-driven commit automation",
        tldrSnippet: "Repo Updater - multi-repo sync + AI-driven commit automation",
        icon: "refresh-cw",
        color: "#F97316",
        href: "https://github.com/Dicklesworthstone/repo_updater",
        features: [
            "One-command multi-repo sync",
            "Parallel operations",
            "Conflict detection with resolution hints",
            "AI code review integration"
        ],
        techStack: [
            "Bash",
            "Git plumbing",
            "GitHub CLI"
        ],
        useCases: [
            "Keeping development machines in sync",
            "CI/CD repo management",
            "Automated codebase maintenance"
        ],
        language: "Bash",
        stars: 67
    },
    {
        id: "stack-slb",
        moduleId: "stack.slb",
        displayName: "Simultaneous Launch Button",
        shortName: "SLB",
        tagline: "Two-person rule for dangerous command approval",
        tldrSnippet: "Two-person rule for dangerous commands (optional guardrails)",
        icon: "shield-check",
        color: "#F59E0B",
        href: "https://github.com/Dicklesworthstone/simultaneous_launch_button",
        features: [
            "Two-person rule enforcement",
            "Command queue with approval workflow",
            "Pattern-based risk detection",
            "SQLite persistence"
        ],
        techStack: [
            "Go",
            "Bubble Tea",
            "SQLite"
        ],
        useCases: [
            "Requiring approval for rm -rf and git reset",
            "Adding safety gates to autonomous agent workflows",
            "Audit trail of dangerous command approvals"
        ],
        language: "Go",
        stars: 49
    },
    {
        id: "stack-srps",
        moduleId: "stack.srps",
        displayName: "System Resource Protection Script",
        shortName: "SRPS",
        tagline: "Auto-deprioritize background processes for responsive dev workstations",
        tldrSnippet: "System Resource Protection Script - ananicy-cpp rules + TUI monitor for responsive dev workstations",
        icon: "shield",
        color: "#EAB308",
        href: "https://github.com/Dicklesworthstone/system_resource_protection_script",
        features: [
            "Automatic process deprioritization",
            "Real-time TUI monitoring",
            "1700+ pre-configured rules",
            "Custom rule creation"
        ],
        techStack: [
            "Go",
            "C++",
            "ananicy-cpp",
            "systemd"
        ],
        useCases: [
            "Multi-agent coding sessions",
            "Large compilation jobs",
            "Heavy test suite runs"
        ],
        language: "Go",
        stars: 50
    },
    {
        id: "stack-storage_ballast_helper",
        moduleId: "stack.storage_ballast_helper",
        displayName: "Storage Ballast Helper",
        shortName: "SBH",
        tagline: "Predictive disk-pressure defense for AI workloads",
        tldrSnippet: "Cross-platform disk-pressure defense for AI coding workloads (sbh)",
        icon: "hard-drive",
        color: "#059669",
        href: "https://github.com/Dicklesworthstone/storage_ballast_helper",
        features: [
            "Predictive disk space monitoring",
            "Safe cleanup policies",
            "Ballast file release",
            "Explainable policy decisions"
        ],
        techStack: [
            "Rust",
            "SQLite",
            "procfs"
        ],
        useCases: [
            "Preventing disk-full failures during builds",
            "Automated cleanup of build artifacts",
            "Monitoring disk usage across projects"
        ],
        language: "Rust",
        stars: 20
    },
    {
        id: "stack-ultimate_bug_scanner",
        moduleId: "stack.ultimate_bug_scanner",
        displayName: "Ultimate Bug Scanner",
        shortName: "UBS",
        tagline: "Pattern-based bug scanner with 1000+ detection rules",
        tldrSnippet: "UBS bug scanning (easy-mode)",
        icon: "bug",
        color: "#F43F5E",
        href: "https://github.com/Dicklesworthstone/ultimate_bug_scanner",
        features: [
            "1000+ built-in detection patterns",
            "Consistent JSON output format",
            "Multi-language support",
            "Perfect for pre-commit hooks"
        ],
        techStack: [
            "Bash",
            "Pattern matching",
            "JSON output"
        ],
        useCases: [
            "Pre-commit validation across polyglot repos",
            "CI/CD pipeline integration",
            "Catching AI-generated code errors"
        ],
        language: "Bash",
        stars: 132
    },
    {
        id: "stack-wezterm_automata",
        moduleId: "stack.wezterm_automata",
        displayName: "WezTerm Automata",
        shortName: "WA",
        tagline: "Terminal hypervisor for multi-agent automation",
        tldrSnippet: "WezTerm Automata (wa) - terminal automation and orchestration for AI agents",
        icon: "monitor",
        color: "#06B6D4",
        href: "https://github.com/Dicklesworthstone/wezterm_automata",
        features: [
            "Real-time terminal observation",
            "Intelligent pattern detection",
            "Robot Mode JSON API",
            "Event-driven automation"
        ],
        techStack: [
            "Rust",
            "WezTerm API",
            "SQLite FTS5"
        ],
        useCases: [
            "Detecting agent rate limits and errors",
            "Coordinating multi-agent workflows",
            "Searching across captured terminal sessions"
        ],
        language: "Rust",
        stars: 42
    },
    {
        id: "utils-aadc",
        moduleId: "utils.aadc",
        displayName: "ASCII Art Diagram Corrector",
        shortName: "AADC",
        tagline: "Fix malformed ASCII diagrams from AI output",
        tldrSnippet: "aadc - ASCII diagram corrector for fixing malformed ASCII art",
        icon: "align-left",
        color: "#EC4899",
        href: "https://github.com/Dicklesworthstone/aadc",
        features: [
            "Auto-repair box alignment",
            "Connector line fixing",
            "Before/after diff preview",
            "Clipboard integration"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Fixing AI-generated architecture diagrams",
            "Cleaning up ASCII flowcharts",
            "Producing clean documentation"
        ],
        language: "Rust"
    },
    {
        id: "utils-caut",
        moduleId: "utils.caut",
        displayName: "Coding Agent Usage Tracker",
        shortName: "CAUT",
        tagline: "Track LLM provider usage and costs across agents",
        tldrSnippet: "coding_agent_usage_tracker (caut) - LLM provider usage tracker",
        icon: "bar-chart-3",
        color: "#14B8A6",
        href: "https://github.com/Dicklesworthstone/coding_agent_usage_tracker",
        features: [
            "Multi-provider usage aggregation",
            "Per-session token breakdown",
            "Cost estimation and trends",
            "Export to CSV/JSON"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Monitoring daily API spend",
            "Comparing provider costs",
            "Optimizing agent token usage"
        ],
        language: "Rust"
    },
    {
        id: "utils-csctf",
        moduleId: "utils.csctf",
        displayName: "Chat Shared Conversation to File",
        shortName: "CSCTF",
        tagline: "Convert AI chat share links to Markdown and HTML",
        tldrSnippet: "Chat Shared Conversation to File - convert AI share links to Markdown/HTML",
        icon: "file-text",
        color: "#8B5CF6",
        href: "https://github.com/Dicklesworthstone/csctf",
        features: [
            "Multi-provider support (ChatGPT, Claude, Gemini, Grok)",
            "Dual Markdown + HTML output",
            "Code block preservation",
            "Batch URL processing"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Archiving important AI conversations",
            "Preserving code solutions from chat",
            "Building a local knowledge base from AI interactions"
        ],
        language: "Rust"
    },
    {
        id: "utils-giil",
        moduleId: "utils.giil",
        displayName: "Get Image from Internet Link",
        shortName: "GIIL",
        tagline: "Download cloud images for visual debugging",
        tldrSnippet: "Get Image from Internet Link - download cloud images for visual debugging",
        icon: "image",
        color: "#64748B",
        href: "https://github.com/Dicklesworthstone/giil",
        features: [
            "iCloud share link support",
            "CLI-based image download",
            "No browser required",
            "Works over SSH"
        ],
        techStack: [
            "Bash",
            "curl",
            "iCloud API"
        ],
        useCases: [
            "Sharing screenshots for remote debugging",
            "Getting images to headless servers",
            "AI agent image analysis workflows"
        ],
        language: "Bash",
        stars: 24
    },
    {
        id: "utils-mdwb",
        moduleId: "utils.mdwb",
        displayName: "Markdown Web Browser",
        shortName: "MDWB",
        tagline: "Convert web pages to clean Markdown for AI consumption",
        tldrSnippet: "markdown_web_browser (mdwb) - Convert websites to Markdown for LLM consumption",
        icon: "globe",
        color: "#10B981",
        href: "https://github.com/Dicklesworthstone/markdown_web_browser",
        features: [
            "Clean content extraction",
            "Code block preservation",
            "Link handling",
            "Pipe-friendly output"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Feeding documentation to AI agents",
            "Archiving web content locally",
            "Building LLM-ready research corpora"
        ],
        language: "Rust"
    },
    {
        id: "utils-rano",
        moduleId: "utils.rano",
        displayName: "Network Observer",
        shortName: "RANO",
        tagline: "Monitor AI CLI network traffic for debugging and analysis",
        tldrSnippet: "rano - Network observer for AI CLIs with request/response logging",
        icon: "network",
        color: "#F59E0B",
        href: "https://github.com/Dicklesworthstone/rano",
        features: [
            "Transparent HTTP proxy interception",
            "Provider-aware log parsing",
            "Token and cost tracking",
            "Real-time traffic monitoring"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Debugging unexpected agent behavior",
            "Tracking API token consumption",
            "Analyzing prompt efficiency"
        ],
        language: "Rust"
    },
    {
        id: "utils-rust_proxy",
        moduleId: "utils.rust_proxy",
        displayName: "Rust Proxy",
        shortName: "RP",
        tagline: "Transparent proxy routing for network traffic debugging",
        tldrSnippet: "rust_proxy - Transparent proxy routing for debugging network traffic",
        icon: "shield",
        color: "#6366F1",
        href: "https://github.com/Dicklesworthstone/rust_proxy",
        features: [
            "Transparent HTTP/HTTPS proxying",
            "Request/response logging",
            "Latency measurement",
            "Header inspection"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Debugging API communication issues",
            "Measuring request latency",
            "Inspecting headers and payloads"
        ],
        language: "Rust"
    },
    {
        id: "utils-s2p",
        moduleId: "utils.s2p",
        displayName: "Source to Prompt TUI",
        shortName: "S2P",
        tagline: "Interactive code-to-prompt generator with token counting",
        tldrSnippet: "source_to_prompt_tui (s2p) - Code to LLM prompt generator with TUI",
        icon: "file-code",
        color: "#22C55E",
        href: "https://github.com/Dicklesworthstone/source_to_prompt_tui",
        features: [
            "Interactive file selection",
            "Real-time token counting",
            "Clipboard integration",
            "Gitignore-aware filtering"
        ],
        techStack: [
            "TypeScript",
            "Bun",
            "React",
            "Ink",
            "tiktoken"
        ],
        useCases: [
            "Preparing code context for Claude/GPT",
            "Creating reproducible prompt templates",
            "Managing context window budget"
        ],
        language: "TypeScript",
        stars: 78
    },
    {
        id: "utils-toon_rust",
        moduleId: "utils.toon_rust",
        displayName: "Token-Optimized Notation",
        shortName: "TRU",
        tagline: "Compress source code for maximum LLM context efficiency",
        tldrSnippet: "toon_rust (tru) - Token-optimized notation format for LLM context efficiency",
        icon: "minimize-2",
        color: "#06B6D4",
        href: "https://github.com/Dicklesworthstone/toon_rust",
        features: [
            "40-70% token count reduction",
            "Multi-language support",
            "Token count statistics",
            "Reversible compression"
        ],
        techStack: [
            "Rust"
        ],
        useCases: [
            "Fitting more code context into LLM requests",
            "Reducing API costs for large codebases",
            "Preparing code for context-limited models"
        ],
        language: "Rust"
    },
    {
        id: "utils-xf",
        moduleId: "utils.xf",
        displayName: "X Archive Search",
        shortName: "XF",
        tagline: "Ultra-fast search over X/Twitter data archives",
        tldrSnippet: "xf - Ultra-fast X/Twitter archive search with Tantivy",
        icon: "archive",
        color: "#3B82F6",
        href: "https://github.com/Dicklesworthstone/xf",
        features: [
            "Sub-second search over large archives",
            "Semantic + keyword hybrid search",
            "No external API dependencies",
            "Privacy-preserving local processing"
        ],
        techStack: [
            "Rust",
            "Tantivy",
            "Hash embeddings",
            "RRF"
        ],
        useCases: [
            "Finding bookmarked threads",
            "Researching past discussions",
            "Building on ideas from tweet history"
        ],
        language: "Rust",
        stars: 156
    }
];
}),
"[project]/apps/web/lib/generated/manifest-commands.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// AUTO-GENERATED FROM acfs.manifest.yaml — DO NOT EDIT
// Regenerate: bun run generate (from packages/manifest)
// ============================================================
__turbopack_context__.s([
    "manifestCommands",
    ()=>manifestCommands
]);
const manifestCommands = [
    {
        moduleId: "stack.agent_settings_backup",
        displayName: "Agent Settings Backup",
        moduleCategory: "stack",
        cliName: "asb",
        cliAliases: [],
        description: "Smart backup tool for AI coding agent configuration folders (asb)",
        commandExample: "asb backup",
        docsUrl: "https://github.com/Dicklesworthstone/agent_settings_backup_script"
    },
    {
        moduleId: "stack.automated_plan_reviser",
        displayName: "Automated Plan Reviser Pro",
        moduleCategory: "stack",
        cliName: "apr",
        cliAliases: [],
        description: "Automated iterative spec refinement with extended AI reasoning (apr)",
        docsUrl: "https://github.com/Dicklesworthstone/automated_plan_reviser_pro"
    },
    {
        moduleId: "stack.beads_rust",
        displayName: "beads_rust",
        moduleCategory: "stack",
        cliName: "br",
        cliAliases: [],
        description: "beads_rust (br) - Rust issue tracker with graph-aware dependencies",
        commandExample: "br ready --json",
        docsUrl: "https://github.com/Dicklesworthstone/beads_rust"
    },
    {
        moduleId: "stack.beads_viewer",
        displayName: "Beads Viewer",
        moduleCategory: "stack",
        cliName: "bv",
        cliAliases: [],
        description: "bv TUI for Beads tasks",
        commandExample: "bv --robot-triage",
        docsUrl: "https://github.com/Dicklesworthstone/beads_viewer"
    },
    {
        moduleId: "stack.brenner_bot",
        displayName: "Brenner Bot",
        moduleCategory: "stack",
        cliName: "brenner",
        cliAliases: [],
        description: "Brenner Bot - research session manager with hypothesis tracking",
        docsUrl: "https://github.com/Dicklesworthstone/brenner_bot"
    },
    {
        moduleId: "stack.caam",
        displayName: "Coding Agent Account Manager",
        moduleCategory: "stack",
        cliName: "caam",
        cliAliases: [],
        description: "Instant auth switching for agent CLIs",
        commandExample: "caam status",
        docsUrl: "https://github.com/Dicklesworthstone/coding_agent_account_manager"
    },
    {
        moduleId: "stack.cass",
        displayName: "Coding Agent Session Search",
        moduleCategory: "stack",
        cliName: "cass",
        cliAliases: [],
        description: "Unified search across agent session history",
        commandExample: "cass search \"auth error\" --robot",
        docsUrl: "https://github.com/Dicklesworthstone/coding_agent_session_search"
    },
    {
        moduleId: "stack.cm",
        displayName: "CASS Memory System",
        moduleCategory: "stack",
        cliName: "cm",
        cliAliases: [],
        description: "Procedural memory for agents (cass-memory)",
        commandExample: "cm context \"task\" --json",
        docsUrl: "https://github.com/Dicklesworthstone/cass_memory_system"
    },
    {
        moduleId: "stack.cross_agent_session_resumer",
        displayName: "Cross-Agent Session Resumer",
        moduleCategory: "stack",
        cliName: "casr",
        cliAliases: [],
        description: "Cross-provider AI coding session resumption — convert and resume sessions across providers (casr)",
        commandExample: "casr export --from claude",
        docsUrl: "https://github.com/Dicklesworthstone/cross_agent_session_resumer"
    },
    {
        moduleId: "stack.dcg",
        displayName: "Destructive Command Guard",
        moduleCategory: "stack",
        cliName: "dcg",
        cliAliases: [],
        description: "Destructive Command Guard - Claude Code hook blocking dangerous git/fs commands",
        commandExample: "dcg doctor",
        docsUrl: "https://github.com/Dicklesworthstone/destructive_command_guard"
    },
    {
        moduleId: "stack.doodlestein_self_releaser",
        displayName: "Doodlestein Self-Releaser",
        moduleCategory: "stack",
        cliName: "dsr",
        cliAliases: [],
        description: "Fallback release infrastructure — local builds via act when GitHub Actions is throttled (dsr)",
        commandExample: "dsr release",
        docsUrl: "https://github.com/Dicklesworthstone/doodlestein_self_releaser"
    },
    {
        moduleId: "stack.frankensearch",
        displayName: "FrankenSearch",
        moduleCategory: "stack",
        cliName: "fsfs",
        cliAliases: [],
        description: "Two-tier hybrid local search — lexical (BM25) + semantic retrieval with progressive delivery (fsfs)",
        commandExample: "fsfs search \"query\"",
        docsUrl: "https://github.com/Dicklesworthstone/frankensearch"
    },
    {
        moduleId: "stack.jeffreysprompts",
        displayName: "JeffreysPrompts CLI",
        moduleCategory: "stack",
        cliName: "jfp",
        cliAliases: [],
        description: "Curated battle-tested prompts for AI agents - browse and install as skills (jfp)",
        docsUrl: "https://jeffreysprompts.com"
    },
    {
        moduleId: "stack.mcp_agent_mail",
        displayName: "MCP Agent Mail",
        moduleCategory: "stack",
        cliName: "am",
        cliAliases: [],
        description: "Like gmail for coding agents; MCP HTTP server + token; installs beads tools",
        docsUrl: "https://github.com/Dicklesworthstone/mcp_agent_mail"
    },
    {
        moduleId: "stack.meta_skill",
        displayName: "Meta Skill",
        moduleCategory: "stack",
        cliName: "ms",
        cliAliases: [],
        description: "Local-first knowledge management with hybrid semantic search (ms)",
        docsUrl: "https://github.com/Dicklesworthstone/meta_skill"
    },
    {
        moduleId: "stack.ntm",
        displayName: "Named Tmux Manager",
        moduleCategory: "stack",
        cliName: "ntm",
        cliAliases: [],
        description: "Named tmux manager (agent cockpit)",
        docsUrl: "https://github.com/Dicklesworthstone/ntm"
    },
    {
        moduleId: "stack.pcr",
        displayName: "Post-Compact Reminder",
        moduleCategory: "stack",
        cliName: "claude-post-compact-reminder",
        cliAliases: [
            "pcr"
        ],
        description: "Post-compaction reminder hook for Claude Code that forces an AGENTS.md re-read",
        commandExample: "printf '{\"session_id\":\"demo\",\"source\":\"compact\"}\\n' | claude-post-compact-reminder",
        docsUrl: "https://github.com/Dicklesworthstone/post_compact_reminder"
    },
    {
        moduleId: "stack.process_triage",
        displayName: "Process Triage",
        moduleCategory: "stack",
        cliName: "pt",
        cliAliases: [],
        description: "Find and terminate stuck/zombie processes with intelligent scoring (pt)",
        commandExample: "pt --robot --top 10",
        docsUrl: "https://github.com/Dicklesworthstone/process_triage"
    },
    {
        moduleId: "stack.rch",
        displayName: "Remote Compilation Helper",
        moduleCategory: "stack",
        cliName: "rch",
        cliAliases: [],
        description: "Remote Compilation Helper - transparent build offloading for AI coding agents",
        commandExample: "rch status",
        docsUrl: "https://github.com/Dicklesworthstone/remote_compilation_helper"
    },
    {
        moduleId: "stack.ru",
        displayName: "Repo Updater",
        moduleCategory: "stack",
        cliName: "ru",
        cliAliases: [],
        description: "Repo Updater - multi-repo sync + AI-driven commit automation",
        commandExample: "ru sync --parallel 4",
        docsUrl: "https://github.com/Dicklesworthstone/repo_updater"
    },
    {
        moduleId: "stack.slb",
        displayName: "Simultaneous Launch Button",
        moduleCategory: "stack",
        cliName: "slb",
        cliAliases: [],
        description: "Two-person rule for dangerous commands (optional guardrails)",
        docsUrl: "https://github.com/Dicklesworthstone/simultaneous_launch_button"
    },
    {
        moduleId: "stack.srps",
        displayName: "System Resource Protection Script",
        moduleCategory: "stack",
        cliName: "sysmoni",
        cliAliases: [],
        description: "System Resource Protection Script - ananicy-cpp rules + TUI monitor for responsive dev workstations",
        docsUrl: "https://github.com/Dicklesworthstone/system_resource_protection_script"
    },
    {
        moduleId: "stack.storage_ballast_helper",
        displayName: "Storage Ballast Helper",
        moduleCategory: "stack",
        cliName: "sbh",
        cliAliases: [],
        description: "Cross-platform disk-pressure defense for AI coding workloads (sbh)",
        commandExample: "sbh status",
        docsUrl: "https://github.com/Dicklesworthstone/storage_ballast_helper"
    },
    {
        moduleId: "stack.ultimate_bug_scanner",
        displayName: "Ultimate Bug Scanner",
        moduleCategory: "stack",
        cliName: "ubs",
        cliAliases: [],
        description: "UBS bug scanning (easy-mode)",
        commandExample: "ubs file.ts",
        docsUrl: "https://github.com/Dicklesworthstone/ultimate_bug_scanner"
    },
    {
        moduleId: "stack.wezterm_automata",
        displayName: "WezTerm Automata",
        moduleCategory: "stack",
        cliName: "wa",
        cliAliases: [],
        description: "WezTerm Automata (wa) - terminal automation and orchestration for AI agents",
        docsUrl: "https://github.com/Dicklesworthstone/wezterm_automata"
    },
    {
        moduleId: "utils.aadc",
        displayName: "ASCII Art Diagram Corrector",
        moduleCategory: "tools",
        cliName: "aadc",
        cliAliases: [],
        description: "aadc - ASCII diagram corrector for fixing malformed ASCII art",
        docsUrl: "https://github.com/Dicklesworthstone/aadc"
    },
    {
        moduleId: "utils.caut",
        displayName: "Coding Agent Usage Tracker",
        moduleCategory: "tools",
        cliName: "caut",
        cliAliases: [],
        description: "coding_agent_usage_tracker (caut) - LLM provider usage tracker",
        docsUrl: "https://github.com/Dicklesworthstone/coding_agent_usage_tracker"
    },
    {
        moduleId: "utils.csctf",
        displayName: "Chat Shared Conversation to File",
        moduleCategory: "tools",
        cliName: "csctf",
        cliAliases: [],
        description: "Chat Shared Conversation to File - convert AI share links to Markdown/HTML",
        docsUrl: "https://github.com/Dicklesworthstone/csctf"
    },
    {
        moduleId: "utils.giil",
        displayName: "Get Image from Internet Link",
        moduleCategory: "tools",
        cliName: "giil",
        cliAliases: [],
        description: "Get Image from Internet Link - download cloud images for visual debugging",
        docsUrl: "https://github.com/Dicklesworthstone/giil"
    },
    {
        moduleId: "utils.mdwb",
        displayName: "Markdown Web Browser",
        moduleCategory: "tools",
        cliName: "mdwb",
        cliAliases: [],
        description: "markdown_web_browser (mdwb) - Convert websites to Markdown for LLM consumption",
        docsUrl: "https://github.com/Dicklesworthstone/markdown_web_browser"
    },
    {
        moduleId: "utils.rano",
        displayName: "Network Observer",
        moduleCategory: "tools",
        cliName: "rano",
        cliAliases: [],
        description: "rano - Network observer for AI CLIs with request/response logging",
        docsUrl: "https://github.com/Dicklesworthstone/rano"
    },
    {
        moduleId: "utils.rust_proxy",
        displayName: "Rust Proxy",
        moduleCategory: "tools",
        cliName: "rust_proxy",
        cliAliases: [],
        description: "rust_proxy - Transparent proxy routing for debugging network traffic",
        docsUrl: "https://github.com/Dicklesworthstone/rust_proxy"
    },
    {
        moduleId: "utils.s2p",
        displayName: "Source to Prompt TUI",
        moduleCategory: "tools",
        cliName: "s2p",
        cliAliases: [],
        description: "source_to_prompt_tui (s2p) - Code to LLM prompt generator with TUI",
        docsUrl: "https://github.com/Dicklesworthstone/source_to_prompt_tui"
    },
    {
        moduleId: "utils.toon_rust",
        displayName: "Token-Optimized Notation",
        moduleCategory: "tools",
        cliName: "tru",
        cliAliases: [],
        description: "toon_rust (tru) - Token-optimized notation format for LLM context efficiency",
        docsUrl: "https://github.com/Dicklesworthstone/toon_rust"
    },
    {
        moduleId: "utils.xf",
        displayName: "X Archive Search",
        moduleCategory: "tools",
        cliName: "xf",
        cliAliases: [],
        description: "xf - Ultra-fast X/Twitter archive search with Tantivy",
        docsUrl: "https://github.com/Dicklesworthstone/xf"
    }
];
}),
"[project]/apps/web/lib/manifest-adapter.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getManifestCommand",
    ()=>getManifestCommand,
    "getManifestTldr",
    ()=>getManifestTldr,
    "getManifestTool",
    ()=>getManifestTool,
    "shortIdToModuleId",
    ()=>shortIdToModuleId
]);
/**
 * Manifest Adapter
 *
 * Bridges generated manifest data (from acfs.manifest.yaml) with the
 * hand-maintained UI data files (flywheel.ts, tldr-content.ts, commands.ts).
 *
 * The manifest is the source of truth for basic metadata (names, taglines,
 * tech stacks, features, use cases, stars, hrefs). Rich UI-specific data
 * (deep descriptions, synergies, Tailwind gradient colors, workflow scenarios)
 * stays hand-maintained.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$generated$2f$manifest$2d$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/generated/manifest-tools.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$generated$2f$manifest$2d$tldr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/generated/manifest-tldr.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$generated$2f$manifest$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/generated/manifest-commands.ts [app-ssr] (ecmascript)");
;
;
;
const shortIdToModuleId = {
    mail: 'stack.mcp_agent_mail',
    bv: 'stack.beads_viewer',
    br: 'stack.beads_rust',
    ntm: 'stack.ntm',
    cm: 'stack.cm',
    cass: 'stack.cass',
    slb: 'stack.slb',
    dcg: 'stack.dcg',
    ru: 'stack.ru',
    apr: 'stack.automated_plan_reviser',
    ms: 'stack.meta_skill',
    ubs: 'stack.ultimate_bug_scanner',
    pt: 'stack.process_triage',
    jfp: 'stack.jeffreysprompts',
    brenner: 'stack.brenner_bot',
    rch: 'stack.rch',
    wa: 'stack.wezterm_automata',
    srps: 'stack.srps',
    caam: 'stack.caam',
    xf: 'utils.xf',
    giil: 'utils.giil',
    csctf: 'utils.csctf',
    s2p: 'utils.s2p',
    tru: 'utils.toon_rust',
    rano: 'utils.rano',
    mdwb: 'utils.mdwb',
    rust_proxy: 'utils.rust_proxy',
    aadc: 'utils.aadc',
    caut: 'utils.caut',
    fsfs: 'stack.frankensearch',
    sbh: 'stack.storage_ballast_helper',
    casr: 'stack.cross_agent_session_resumer',
    dsr: 'stack.doodlestein_self_releaser',
    asb: 'stack.agent_settings_backup',
    pcr: 'stack.pcr'
};
// Lookup maps indexed by moduleId for O(1) access
const toolsByModuleId = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$generated$2f$manifest$2d$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["manifestTools"].map((t)=>[
        t.moduleId,
        t
    ]));
const tldrByModuleId = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$generated$2f$manifest$2d$tldr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["manifestTldrTools"].map((t)=>[
        t.moduleId,
        t
    ]));
const commandsByModuleId = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$generated$2f$manifest$2d$commands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["manifestCommands"].map((c)=>[
        c.moduleId,
        c
    ]));
function getManifestTool(shortId) {
    const moduleId = shortIdToModuleId[shortId];
    return moduleId ? toolsByModuleId.get(moduleId) : undefined;
}
function getManifestTldr(shortId) {
    const moduleId = shortIdToModuleId[shortId];
    return moduleId ? tldrByModuleId.get(moduleId) : undefined;
}
function getManifestCommand(shortId) {
    const moduleId = shortIdToModuleId[shortId];
    return moduleId ? commandsByModuleId.get(moduleId) : undefined;
}
;
}),
"[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOOLS",
    ()=>TOOLS,
    "TOOL_IDS",
    ()=>TOOL_IDS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/bell-ring.js [app-ssr] (ecmascript) <export default as BellRing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitMerge$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/git-merge.js [app-ssr] (ecmascript) <export default as GitMerge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-ssr] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/key-round.js [app-ssr] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/repeat.js [app-ssr] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$manifest$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/manifest-adapter.ts [app-ssr] (ecmascript) <locals>");
;
;
;
const manifestShortIdByToolId = {
    ntm: "ntm",
    beads: "br",
    "agent-mail": "mail",
    ubs: "ubs",
    cass: "cass",
    cm: "cm",
    caam: "caam",
    slb: "slb",
    dcg: "dcg",
    ru: "ru",
    ms: "ms",
    apr: "apr",
    jfp: "jfp",
    pt: "pt",
    srps: "srps",
    xf: "xf",
    rch: "rch",
    fsfs: "fsfs",
    sbh: "sbh",
    casr: "casr",
    dsr: "dsr",
    asb: "asb",
    pcr: "pcr"
};
function withCanonicalManifestMetadata(tools) {
    return Object.fromEntries(Object.entries(tools).map(([toolId, tool])=>{
        const shortId = manifestShortIdByToolId[toolId];
        const manifest = shortId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$manifest$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getManifestCommand"])(shortId) : undefined;
        if (!manifest) {
            return [
                toolId,
                tool
            ];
        }
        return [
            toolId,
            {
                ...tool,
                docsUrl: manifest.docsUrl ?? tool.docsUrl,
                quickCommand: manifest.commandExample ?? tool.quickCommand
            }
        ];
    }));
}
const RAW_TOOLS = {
    "claude-code": {
        id: "claude-code",
        title: "Claude Code",
        tagline: "Anthropic's AI coding agent - deep reasoning and architecture",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-orange-500/20 via-amber-500/20 to-orange-500/20",
        glowColor: "rgba(251,146,60,0.4)",
        docsUrl: "https://docs.anthropic.com/en/docs/claude-code",
        docsLabel: "Anthropic Docs",
        quickCommand: "cc",
        relatedTools: [
            "codex-cli",
            "gemini-cli",
            "ntm"
        ]
    },
    "codex-cli": {
        id: "codex-cli",
        title: "Codex CLI",
        tagline: "OpenAI's coding agent - fast iteration and structured work",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20",
        glowColor: "rgba(52,211,153,0.4)",
        docsUrl: "https://github.com/openai/codex",
        docsLabel: "GitHub",
        quickCommand: "cod",
        relatedTools: [
            "claude-code",
            "gemini-cli",
            "ntm"
        ]
    },
    "gemini-cli": {
        id: "gemini-cli",
        title: "Gemini CLI",
        tagline: "Google's coding agent - large context exploration",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-blue-500/20 via-indigo-500/20 to-blue-500/20",
        glowColor: "rgba(99,102,241,0.4)",
        docsUrl: "https://github.com/google-gemini/gemini-cli",
        docsLabel: "GitHub",
        quickCommand: "gmi",
        relatedTools: [
            "claude-code",
            "codex-cli",
            "ntm"
        ]
    },
    ntm: {
        id: "ntm",
        title: "Named Tmux Manager",
        tagline: "The agent cockpit - spawn and orchestrate multiple agents",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-sky-500/20 via-blue-500/20 to-sky-500/20",
        glowColor: "rgba(56,189,248,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/ntm",
        docsLabel: "GitHub",
        quickCommand: "ntm spawn myproject --cc=2",
        relatedTools: [
            "claude-code",
            "codex-cli",
            "agent-mail"
        ]
    },
    beads: {
        id: "beads",
        title: "Beads",
        tagline: "Task graphs + robot triage for dependency-aware work tracking",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20",
        glowColor: "rgba(52,211,153,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/beads_viewer",
        docsLabel: "GitHub",
        quickCommand: "br ready",
        relatedTools: [
            "agent-mail",
            "ubs"
        ]
    },
    "agent-mail": {
        id: "agent-mail",
        title: "MCP Agent Mail",
        tagline: "Gmail for agents - messaging, threads, and file reservations",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-violet-500/20 via-purple-500/20 to-violet-500/20",
        glowColor: "rgba(139,92,246,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/mcp_agent_mail",
        docsLabel: "GitHub",
        relatedTools: [
            "ntm",
            "beads",
            "cass"
        ]
    },
    ubs: {
        id: "ubs",
        title: "Ultimate Bug Scanner",
        tagline: "Fast polyglot static analysis - your pre-commit quality gate",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-rose-500/20 via-red-500/20 to-rose-500/20",
        glowColor: "rgba(244,63,94,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/ultimate_bug_scanner",
        docsLabel: "GitHub",
        quickCommand: "ubs .",
        relatedTools: [
            "beads",
            "slb"
        ]
    },
    cass: {
        id: "cass",
        title: "CASS",
        tagline: "Search across all your agent sessions instantly",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-cyan-500/20 via-sky-500/20 to-cyan-500/20",
        glowColor: "rgba(34,211,238,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/coding_agent_session_search",
        docsLabel: "GitHub",
        quickCommand: "cass search 'auth error' --robot",
        relatedTools: [
            "cm",
            "agent-mail"
        ]
    },
    cm: {
        id: "cm",
        title: "CASS Memory",
        tagline: "Procedural memory - playbooks and lessons from past sessions",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-fuchsia-500/20 via-pink-500/20 to-fuchsia-500/20",
        glowColor: "rgba(217,70,239,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/cass_memory_system",
        docsLabel: "GitHub",
        quickCommand: "cm context 'my task' --json",
        relatedTools: [
            "cass",
            "beads"
        ]
    },
    caam: {
        id: "caam",
        title: "CAAM",
        tagline: "Switch agent credentials safely without account confusion",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-amber-500/20 via-orange-500/20 to-amber-500/20",
        glowColor: "rgba(251,146,60,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/coding_agent_account_manager",
        docsLabel: "GitHub",
        relatedTools: [
            "claude-code",
            "codex-cli",
            "gemini-cli"
        ]
    },
    slb: {
        id: "slb",
        title: "SLB",
        tagline: "Two-person rule for dangerous commands - safety first",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-yellow-500/20 via-orange-500/20 to-yellow-500/20",
        glowColor: "rgba(251,191,36,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/simultaneous_launch_button",
        docsLabel: "GitHub",
        relatedTools: [
            "ubs",
            "beads",
            "dcg"
        ]
    },
    dcg: {
        id: "dcg",
        title: "DCG",
        tagline: "Pre-execution safety net - blocks dangerous commands before damage",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-red-500/20 via-rose-500/20 to-red-500/20",
        glowColor: "rgba(244,63,94,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/destructive_command_guard",
        docsLabel: "GitHub",
        quickCommand: "dcg test 'rm -rf /' --explain",
        relatedTools: [
            "slb",
            "claude-code",
            "ntm"
        ]
    },
    ru: {
        id: "ru",
        title: "Repo Updater",
        tagline: "Multi-repo sync + AI-driven commit automation",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitMerge$3e$__["GitMerge"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-indigo-500/20 via-blue-500/20 to-indigo-500/20",
        glowColor: "rgba(99,102,241,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/repo_updater",
        docsLabel: "GitHub",
        quickCommand: "ru sync --parallel 4",
        relatedTools: [
            "ntm",
            "beads",
            "agent-mail"
        ]
    },
    ms: {
        id: "ms",
        title: "Meta Skill",
        tagline: "Local-first knowledge management with hybrid semantic search and Git-backed audit trails",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-purple-500/20 via-violet-500/20 to-purple-500/20",
        glowColor: "rgba(139,92,246,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/meta_skill",
        docsLabel: "GitHub",
        quickCommand: "ms install my-skill",
        relatedTools: [
            "jfp",
            "claude-code",
            "agent-mail"
        ]
    },
    apr: {
        id: "apr",
        title: "Automated Plan Reviser",
        tagline: "Automated iterative spec refinement with 15+ AI review rounds",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-teal-500/20 via-cyan-500/20 to-teal-500/20",
        glowColor: "rgba(45,212,191,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/automated_plan_reviser_pro",
        docsLabel: "GitHub",
        quickCommand: "apr refine plan.md",
        relatedTools: [
            "beads",
            "claude-code",
            "ntm"
        ]
    },
    jfp: {
        id: "jfp",
        title: "JeffreysPrompts",
        tagline: "Battle-tested prompt library for AI agents with one-click skill install",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-amber-500/20 via-yellow-500/20 to-amber-500/20",
        glowColor: "rgba(245,158,11,0.4)",
        docsUrl: "https://jeffreysprompts.com",
        docsLabel: "Website",
        quickCommand: "jfp list",
        relatedTools: [
            "ms",
            "claude-code",
            "codex-cli"
        ]
    },
    pt: {
        id: "pt",
        title: "Process Triage",
        tagline: "Find and kill stuck/zombie processes with Bayesian scoring and decision memory",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-lime-500/20 via-green-500/20 to-lime-500/20",
        glowColor: "rgba(132,204,22,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/process_triage",
        docsLabel: "GitHub",
        quickCommand: "pt --help",
        relatedTools: [
            "ntm",
            "slb",
            "dcg"
        ]
    },
    srps: {
        id: "srps",
        title: "System Resource Protection Script",
        tagline: "Keep your workstation responsive under heavy agent load",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-yellow-500/20 via-orange-500/20 to-yellow-500/20",
        glowColor: "rgba(234, 179, 8, 0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/system_resource_protection_script",
        docsLabel: "GitHub",
        quickCommand: "sysmoni",
        relatedTools: [
            "ntm",
            "dcg",
            "slb"
        ]
    },
    xf: {
        id: "xf",
        title: "X Archive Search",
        tagline: "Blazingly fast local search across your X/Twitter archive",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-slate-500/20 via-gray-500/20 to-slate-500/20",
        glowColor: "rgba(148,163,184,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/xf",
        docsLabel: "GitHub",
        quickCommand: "xf search 'keyword'",
        relatedTools: [
            "cass",
            "cm"
        ]
    },
    rch: {
        id: "rch",
        title: "Remote Compilation Helper",
        tagline: "Offload cargo builds to remote workers - keep your machine responsive",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
        glowColor: "rgba(59,130,246,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/remote_compilation_helper",
        docsLabel: "GitHub",
        quickCommand: "rch exec -- cargo build --release",
        relatedTools: [
            "ntm",
            "pt",
            "sbh"
        ]
    },
    fsfs: {
        id: "fsfs",
        title: "Frankensearch",
        tagline: "Hybrid search engine combining BM25, semantic, and structural search",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-purple-500/20 via-fuchsia-500/20 to-purple-500/20",
        glowColor: "rgba(168,85,247,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/frankensearch",
        docsLabel: "GitHub",
        quickCommand: "fsfs search 'query'",
        relatedTools: [
            "cass",
            "cm",
            "xf"
        ]
    },
    sbh: {
        id: "sbh",
        title: "Storage Ballast Helper",
        tagline: "Predictive disk-pressure defense for AI coding workloads",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-green-500/20 via-emerald-500/20 to-green-500/20",
        glowColor: "rgba(16,185,129,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/storage_ballast_helper",
        docsLabel: "GitHub",
        quickCommand: "sbh status",
        relatedTools: [
            "pt",
            "rch",
            "ntm"
        ]
    },
    casr: {
        id: "casr",
        title: "Cross-Agent Session Resumer",
        tagline: "Resume coding sessions across AI providers seamlessly",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-fuchsia-500/20 via-pink-500/20 to-fuchsia-500/20",
        glowColor: "rgba(217,70,239,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/cross_agent_session_resumer",
        docsLabel: "GitHub",
        quickCommand: "casr providers",
        relatedTools: [
            "cass",
            "cm",
            "caam"
        ]
    },
    dsr: {
        id: "dsr",
        title: "Doodlestein Self-Releaser",
        tagline: "Fallback release infrastructure when GitHub Actions is throttled",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-orange-500/20 via-red-500/20 to-orange-500/20",
        glowColor: "rgba(249,115,22,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/doodlestein_self_releaser",
        docsLabel: "GitHub",
        quickCommand: "dsr check --all",
        relatedTools: [
            "ru",
            "ntm",
            "slb"
        ]
    },
    asb: {
        id: "asb",
        title: "Agent Settings Backup",
        tagline: "Git-versioned backups for all your AI agent configurations",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-amber-500/20 via-yellow-500/20 to-amber-500/20",
        glowColor: "rgba(245,158,11,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/agent_settings_backup_script",
        docsLabel: "GitHub",
        quickCommand: "asb backup --all",
        relatedTools: [
            "caam",
            "claude-code",
            "codex-cli"
        ]
    },
    pcr: {
        id: "pcr",
        title: "Post-Compact Reminder",
        tagline: "Stop Claude from forgetting project rules after context compaction",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__["BellRing"], {
            className: "h-8 w-8",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-red-500/20 via-orange-500/20 to-red-500/20",
        glowColor: "rgba(220,38,38,0.4)",
        docsUrl: "https://github.com/Dicklesworthstone/post_compact_reminder",
        docsLabel: "GitHub",
        quickCommand: 'printf \'{"session_id":"demo","source":"compact"}\\n\' | claude-post-compact-reminder',
        relatedTools: [
            "dcg",
            "claude-code",
            "slb"
        ]
    }
};
const TOOLS = withCanonicalManifestMetadata(RAW_TOOLS);
const TOOL_IDS = Object.keys(TOOLS);
}),
"[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolPageContent",
    ()=>ToolPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$styled$2d$jsx$40$5$2e$1$2e$6$2b$83d5fd7b249dbeef$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/styled-jsx@5.1.6+83d5fd7b249dbeef/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.562.0+83d5fd7b249dbeef/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$motion$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/components/motion/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript) <export m as motion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$learn$2f$tools$2f5b$tool$5d2f$tool$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/learn/tools/[tool]/tool-data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function FloatingOrb({ className, delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
        className: `absolute rounded-full pointer-events-none ${className}`,
        animate: {
            y: [
                0,
                -20,
                0
            ],
            scale: [
                1,
                1.05,
                1
            ]
        },
        transition: {
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function RelatedToolCard({ toolId }) {
    const tool = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$learn$2f$tools$2f5b$tool$5d2f$tool$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOLS"][toolId];
    if (!tool) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/learn/tools/${toolId}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
            whileHover: {
                y: -2,
                scale: 1.02
            },
            whileTap: {
                scale: 0.98
            },
            className: "group relative flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 backdrop-blur-md transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]",
            style: {
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 rounded-xl bg-gradient-to-br ${tool.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${tool.gradient} border border-white/10`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white/90",
                        children: tool.icon
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative min-w-0 flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truncate font-medium text-sm text-white/90 group-hover:text-white transition-colors",
                        children: tool.title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "relative h-4 w-4 text-white/60 group-hover:text-white/80 transition-colors",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function CopyButton({ text }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const copyResetTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (copyResetTimerRef.current) {
                clearTimeout(copyResetTimerRef.current);
            }
        };
    }, []);
    const handleCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const copiedOk = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyTextToClipboard"])(text);
        if (!copiedOk) {
            return;
        }
        setCopied(true);
        if (copyResetTimerRef.current) {
            clearTimeout(copyResetTimerRef.current);
        }
        copyResetTimerRef.current = setTimeout(()=>{
            setCopied(false);
            copyResetTimerRef.current = null;
        }, 2000);
    }, [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleCopy,
        className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-md px-2 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white/80",
        "aria-label": copied ? "Copied!" : "Copy command",
        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-3 w-3",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Copied!"
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                    className: "h-3 w-3",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Copy"
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
function ToolPageContent({ tool: doc }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-4f57d6e22a251548" + " " + "min-h-screen bg-black relative overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4f57d6e22a251548" + " " + "fixed inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingOrb, {
                        className: "w-[700px] h-[700px] bg-primary/10 blur-[180px] -top-48 left-1/4",
                        delay: 0
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingOrb, {
                        className: "w-[500px] h-[500px] bg-violet-500/10 blur-[150px] top-1/3 -right-24",
                        delay: 2
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingOrb, {
                        className: "w-[400px] h-[400px] bg-emerald-500/8 blur-[120px] bottom-0 left-0",
                        delay: 4
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4f57d6e22a251548" + " " + "absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(var(--primary-rgb),0.15),_transparent)]"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4f57d6e22a251548" + " " + "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4f57d6e22a251548" + " " + "relative mx-auto max-w-2xl px-6 py-10 md:px-12 md:py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                        className: "mb-10 flex items-center justify-between",
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/learn",
                                className: "group flex items-center gap-2 text-white/50 transition-colors hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4 transition-transform group-hover:-translate-x-1",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4f57d6e22a251548" + " " + "text-sm font-medium",
                                        children: "Learning Hub"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "group flex items-center gap-2 text-white/50 transition-colors hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                        className: "h-4 w-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4f57d6e22a251548" + " " + "text-sm font-medium",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.1
                        },
                        className: "group relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: doc.glowColor
                                },
                                className: "jsx-4f57d6e22a251548" + " " + "absolute -inset-4 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4f57d6e22a251548" + " " + "relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            boxShadow: `0 0 30px ${doc.glowColor}`
                                        },
                                        className: "jsx-4f57d6e22a251548" + " " + `h-1 w-full bg-gradient-to-r ${doc.gradient}`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f57d6e22a251548" + " " + "p-8 md:p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4f57d6e22a251548" + " " + "relative mb-8 flex items-start gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                                                        className: `relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${doc.gradient} border border-white/10`,
                                                        initial: {
                                                            scale: 0.8,
                                                            opacity: 0,
                                                            rotate: -10
                                                        },
                                                        animate: {
                                                            scale: 1,
                                                            opacity: 1,
                                                            rotate: 0
                                                        },
                                                        transition: {
                                                            duration: 0.5,
                                                            delay: 0.2,
                                                            type: "spring"
                                                        },
                                                        style: {
                                                            boxShadow: `0 0 40px ${doc.glowColor}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "absolute inset-0 rounded-2xl overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-4f57d6e22a251548" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "text-white relative z-10",
                                                                children: doc.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f57d6e22a251548" + " " + "min-w-0 flex-1 pt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].h1, {
                                                                className: "mb-2 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl",
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: -20
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.5,
                                                                    delay: 0.3
                                                                },
                                                                children: doc.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].p, {
                                                                className: "text-lg text-white/60",
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: -20
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.5,
                                                                    delay: 0.4
                                                                },
                                                                children: doc.tagline
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                                                className: "mb-8",
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.5
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: doc.docsUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    style: {
                                                        boxShadow: `0 4px 30px rgba(0,0,0,0.3)`
                                                    },
                                                    className: "jsx-4f57d6e22a251548" + " " + "group/btn relative flex w-full items-center justify-center gap-3 rounded-xl bg-white/10 border border-white/10 py-4 px-6 font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:shadow-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "h-5 w-5 text-primary",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-4f57d6e22a251548",
                                                            children: [
                                                                "View Full Documentation on ",
                                                                doc.docsLabel
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            className: "h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this),
                                            doc.quickCommand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                                                className: "mb-8",
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f57d6e22a251548" + " " + "flex items-center gap-2 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                                className: "h-4 w-4 text-primary",
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "text-sm font-semibold text-white/70 uppercase tracking-wider",
                                                                children: "Quick Start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f57d6e22a251548" + " " + "relative group/cmd rounded-xl border border-white/[0.08] bg-black/40 backdrop-blur-sm overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "flex items-center gap-2 px-4 py-2 border-b border-white/[0.05]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "aria-hidden": "true",
                                                                        className: "jsx-4f57d6e22a251548" + " " + "w-3 h-3 rounded-full bg-red-500/70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "aria-hidden": "true",
                                                                        className: "jsx-4f57d6e22a251548" + " " + "w-3 h-3 rounded-full bg-yellow-500/70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "aria-hidden": "true",
                                                                        className: "jsx-4f57d6e22a251548" + " " + "w-3 h-3 rounded-full bg-green-500/70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                        lineNumber: 290,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-4f57d6e22a251548" + " " + "ml-2 text-xs text-white/50",
                                                                        children: "terminal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "p-4 font-mono text-sm pr-24",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        className: "jsx-4f57d6e22a251548" + " " + "text-emerald-400",
                                                                        children: "$"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                        lineNumber: 296,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-4f57d6e22a251548" + " " + "text-white/90 ml-2",
                                                                        children: doc.quickCommand
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                                                text: doc.quickCommand
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this),
                                            doc.id === "dcg" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                                                className: "mb-8",
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.65
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f57d6e22a251548" + " " + "flex items-center gap-2 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                                className: "h-4 w-4 text-primary",
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "text-sm font-semibold text-white/70 uppercase tracking-wider",
                                                                children: "Uninstallation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f57d6e22a251548" + " " + "rounded-xl border border-white/[0.08] bg-black/40 p-4 text-sm text-white/70",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "mb-4",
                                                                children: [
                                                                    "Remove the hook only, or fully purge DCG from your system. You can re-enable it anytime with",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        className: "jsx-4f57d6e22a251548" + " " + "font-mono text-white/90 bg-white/5 px-1 rounded",
                                                                        children: "dcg install"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "rounded-lg border border-white/[0.08] bg-black/60 p-3 text-xs font-mono text-white/90 whitespace-pre overflow-x-auto",
                                                                children: `# Remove hook only
dcg uninstall

# Full removal (hook + binary + config)
dcg uninstall --purge

# Verify removal
dcg doctor`
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this),
                                            doc.relatedTools.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f57d6e22a251548" + " " + "flex items-center gap-2 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                                className: "h-4 w-4 text-primary",
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-4f57d6e22a251548" + " " + "text-sm font-semibold text-white/70 uppercase tracking-wider",
                                                                children: "Related Tools"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f57d6e22a251548" + " " + "grid gap-3 sm:grid-cols-2",
                                                        children: doc.relatedTools.slice(0, 4).map((relatedId, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.3,
                                                                    delay: 0.8 + index * 0.1
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RelatedToolCard, {
                                                                    toolId: relatedId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, relatedId, false, {
                                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__motion$3e$__["motion"].div, {
                        className: "mt-10 flex flex-col items-center gap-4",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5,
                            delay: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/learn/commands",
                            className: "group flex items-center gap-2 text-white/50 transition-colors hover:text-primary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4f57d6e22a251548" + " " + "text-sm",
                                    children: "See all commands in the Command Reference"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$562$2e$0$2b$83d5fd7b249dbeef$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4 transition-transform group-hover:translate-x-1",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$styled$2d$jsx$40$5$2e$1$2e$6$2b$83d5fd7b249dbeef$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "4f57d6e22a251548",
                children: "@keyframes shimmer{0%{transform:translate(-100%)}to{transform:translate(100%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/learn/tools/[tool]/tool-page-content.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_5dc171e5._.js.map