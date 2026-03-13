import { describe, expect, test } from "bun:test";
import { buildCommands, buildInstallCommand } from "./commandBuilder";

describe("buildInstallCommand", () => {
  test("omits TARGET_USER for the default ubuntu user", () => {
    const command = buildInstallCommand("vibe", null, "ubuntu");

    expect(command).not.toContain("TARGET_USER=");
    expect(command).toContain("--mode vibe");
  });

  test("includes TARGET_USER and ACFS_REF for a customized install", () => {
    const command = buildInstallCommand("safe", "v1.2.3", "admin");

    expect(command).toContain('TARGET_USER="admin"');
    expect(command).toContain('ACFS_REF="v1.2.3"');
    expect(command).toContain("/v1.2.3/install.sh");
    expect(command).toContain("--mode safe");
  });
});

describe("buildCommands", () => {
  test("propagates the customized username into installer and SSH commands", () => {
    const commands = buildCommands({
      ip: "10.20.30.40",
      os: "windows",
      username: "admin",
      mode: "safe",
      ref: null,
    });

    const installer = commands.find((command) => command.id === "installer");
    const sshUser = commands.find((command) => command.id === "ssh-user");

    expect(installer?.command).toContain('TARGET_USER="admin"');
    expect(sshUser?.command).toContain("admin@10.20.30.40");
    expect(sshUser?.windowsCommand).toContain("$HOME\\.ssh\\acfs_ed25519");
  });
});
