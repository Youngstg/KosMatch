import "fake-indexeddb/auto";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { demoOptions, demoProject } from "@/data/demo";
import {
  deleteKosMatchDatabase,
  IndexedDbProjectRepository,
  KOSMATCH_DATABASE_NAME,
  KOSMATCH_DATABASE_VERSION,
  openKosMatchDatabase,
} from "@/data/indexeddb";
import type { AccommodationOption, ComparisonProject } from "@/domain/entities";
import { MAX_RUPIAH } from "@/domain/validation";
import {
  confirmProjectImport,
  exportProjectAsJson,
  parseProjectImport,
  ProjectImportError,
} from "@/features/projects/services";

const repositories: IndexedDbProjectRepository[] = [];

function repository(): IndexedDbProjectRepository {
  const instance = new IndexedDbProjectRepository();
  repositories.push(instance);
  return instance;
}

function optionAt(index: number): AccommodationOption {
  const option = demoOptions[index];
  if (option === undefined) throw new Error(`Fixture pilihan kos ke-${index} tidak tersedia.`);
  return option;
}

function sequentialIds(...ids: string[]): () => string {
  return () => {
    const id = ids.shift();
    if (id === undefined) throw new Error("Fixture ID import habis.");
    return id;
  };
}

async function saveDemoProject(target: IndexedDbProjectRepository): Promise<void> {
  await target.saveProject(demoProject);
  for (const option of demoOptions) await target.saveOption(option);
}

describe.sequential("IndexedDB persistence dan backup project", () => {
  beforeEach(async () => {
    repositories.length = 0;
    await deleteKosMatchDatabase();
  });

  afterEach(async () => {
    await Promise.all(repositories.map((instance) => instance.close()));
    await deleteKosMatchDatabase();
  });

  it("membuka schema versi eksplisit dengan store dan index yang ditentukan", async () => {
    const database = await openKosMatchDatabase();

    expect(database.name).toBe(KOSMATCH_DATABASE_NAME);
    expect(database.version).toBe(KOSMATCH_DATABASE_VERSION);
    expect(Array.from(database.objectStoreNames)).toEqual(["options", "projects", "settings"]);

    const transaction = database.transaction(["projects", "options"], "readonly");
    expect(Array.from(transaction.objectStore("projects").indexNames)).toEqual(["updatedAt"]);
    expect(Array.from(transaction.objectStore("options").indexNames)).toEqual(["projectId"]);
    await transaction.done;
    database.close();
  });

  it("menyimpan CRUD, bertahan setelah repository dibuka ulang, dan mengisolasi project", async () => {
    const first = repository();
    await saveDemoProject(first);

    const otherProject: ComparisonProject = {
      ...demoProject,
      id: "project-bandung",
      name: "Kos Bandung",
      favoriteOptionId: null,
    };
    await first.saveProject(otherProject);

    const editedOption: AccommodationOption = {
      ...optionAt(0),
      notes: "Catatan hasil edit.",
      updatedAt: "2026-01-13T08:00:00.000Z",
    };
    await first.saveOption(editedOption);
    await first.close();

    const reopened = repository();
    expect(await reopened.getProject(demoProject.id)).toEqual(demoProject);
    expect((await reopened.getOption(editedOption.id))?.notes).toBe("Catatan hasil edit.");
    expect(await reopened.listOptions(otherProject.id)).toEqual([]);
    expect(await reopened.listOptions(demoProject.id)).toHaveLength(3);

    await reopened.deleteOption(optionAt(1).id);
    expect(await reopened.getOption(optionAt(1).id)).toBeNull();

    await reopened.deleteProject(demoProject.id);
    expect(await reopened.getProject(demoProject.id)).toBeNull();
    expect(await reopened.listOptions(demoProject.id)).toEqual([]);
    expect(await reopened.getProject(otherProject.id)).toEqual(otherProject);
  });

  it("menyimpan proyek aktif melalui store settings", async () => {
    const first = repository();
    await first.saveProject(demoProject);
    await first.saveSetting("activeProjectId", demoProject.id);
    await first.close();

    const reopened = repository();
    expect(await reopened.getSetting<string>("activeProjectId")).toBe(demoProject.id);
  });

  it("memvalidasi nilai sebelum persistence dan menolak perpindahan opsi antar-project", async () => {
    const target = repository();
    await target.saveProject(demoProject);
    await target.saveProject({ ...demoProject, id: "project-surabaya", name: "Kos Surabaya" });

    await expect(
      target.saveOption({ ...optionAt(0), sourceUrl: "ftp://contoh.test/kos" }),
    ).rejects.toThrow();
    await expect(
      target.saveOption({ ...optionAt(0), oneWayCommuteMinutes: 361 }),
    ).rejects.toThrow();
    await expect(
      target.saveOption({
        ...optionAt(0),
        rent: { amount: MAX_RUPIAH + 1, origin: "confirmed" },
      }),
    ).rejects.toThrow();
    await expect(
      target.saveOption({
        ...optionAt(0),
        facilityCodes: ["swimming-pool"],
        facilityValues: { "swimming-pool": true },
      } as unknown as AccommodationOption),
    ).rejects.toThrow();
    await target.saveOption(optionAt(0));
    await expect(
      target.saveOption({ ...optionAt(0), projectId: "project-surabaya" }),
    ).rejects.toThrow("tidak dapat dipindahkan");

    expect(await target.listOptions(demoProject.id)).toHaveLength(1);
    expect(await target.listOptions("project-surabaya")).toEqual([]);
  });

  it("melakukan export/import round trip setelah preview dan mengganti semua ID", async () => {
    const target = repository();
    const favoriteProject: ComparisonProject = {
      ...demoProject,
      favoriteOptionId: optionAt(0).id,
    };
    await target.saveProject(favoriteProject);
    for (const option of demoOptions) await target.saveOption(option);

    const json = await exportProjectAsJson(
      target,
      favoriteProject.id,
      new Date("2026-02-01T00:00:00.000Z"),
    );
    const preview = parseProjectImport(json);

    expect(preview.projectName).toBe(favoriteProject.name);
    expect(preview.optionCount).toBe(3);
    expect(await target.listProjects()).toHaveLength(1);

    const imported = await confirmProjectImport(
      preview,
      target,
      sequentialIds(
        "import-project-id",
        "import-option-one",
        "import-option-two",
        "import-option-three",
        "import-question-id",
      ),
    );

    expect(imported.project.id).toBe("import-project-id");
    expect(imported.options.map(({ id }) => id)).toEqual([
      "import-option-one",
      "import-option-two",
      "import-option-three",
    ]);
    expect(imported.options.every(({ projectId }) => projectId === imported.project.id)).toBe(true);
    expect(imported.options[1]?.verificationQuestions[0]?.id).toBe("import-question-id");
    expect(imported.project.favoriteOptionId).toBe("import-option-one");
    expect(await target.getProject(imported.project.id)).toEqual(imported.project);
    expect(await target.listOptions(imported.project.id)).toEqual(imported.options);
  });

  it("menolak seluruh payload invalid tanpa mengubah data tersimpan", async () => {
    const target = repository();
    await saveDemoProject(target);
    const validJson = await exportProjectAsJson(target, demoProject.id);
    const invalidPayload = JSON.parse(validJson) as Record<string, unknown>;
    invalidPayload.unexpected = true;

    expect(() => parseProjectImport(JSON.stringify(invalidPayload))).toThrow(ProjectImportError);
    expect(await target.listProjects()).toEqual([demoProject]);
    expect(await target.listOptions(demoProject.id)).toEqual(demoOptions);
  });

  it("tidak menyimpan sebagian bundle ketika salah satu ID import collision", async () => {
    const target = repository();
    await saveDemoProject(target);

    const existingProject: ComparisonProject = {
      ...demoProject,
      id: "existing-project",
      name: "Project Existing",
      favoriteOptionId: null,
    };
    const collisionOption: AccommodationOption = {
      ...optionAt(0),
      id: "collision-option",
      projectId: existingProject.id,
      name: "Opsi Existing",
    };
    await target.saveProject(existingProject);
    await target.saveOption(collisionOption);

    const preview = parseProjectImport(await exportProjectAsJson(target, demoProject.id));
    await expect(
      confirmProjectImport(
        preview,
        target,
        sequentialIds(
          "atomic-project-id",
          "atomic-option-one",
          "collision-option",
          "atomic-option-three",
          "atomic-question-id",
        ),
      ),
    ).rejects.toThrow("collision-option sudah ada");

    expect(await target.getProject("atomic-project-id")).toBeNull();
    expect(await target.getOption("atomic-option-one")).toBeNull();
    expect(await target.listOptions(existingProject.id)).toEqual([collisionOption]);
  });
});
