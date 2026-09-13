import { describe, expect, it } from "vitest";

import { demoOptions, demoProject } from "@/data/demo";
import { InMemoryProjectRepository } from "@/data/repositories";

describe("InMemoryProjectRepository", () => {
  it("menyimpan clone dan tidak membocorkan mutasi", async () => {
    const repository = new InMemoryProjectRepository([demoProject], demoOptions);
    const loaded = await repository.getProject(demoProject.id);

    expect(loaded).toEqual(demoProject);
    expect(loaded).not.toBe(demoProject);
    expect(await repository.listOptions(demoProject.id)).toEqual(demoOptions);
  });

  it("menolak opsi tanpa project induk", async () => {
    const repository = new InMemoryProjectRepository();
    const option = demoOptions[0];
    if (option === undefined) throw new Error("Fixture demo tidak lengkap.");

    await expect(repository.saveOption(option)).rejects.toThrow("Project demo-project-jakarta tidak ditemukan.");
  });

  it("menghapus opsi ketika project dihapus", async () => {
    const repository = new InMemoryProjectRepository([demoProject], demoOptions);

    await repository.deleteProject(demoProject.id);

    expect(await repository.getProject(demoProject.id)).toBeNull();
    expect(await repository.listOptions(demoProject.id)).toEqual([]);
  });
});
