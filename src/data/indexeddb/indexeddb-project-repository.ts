import type { IDBPDatabase } from "idb";

import type { ProjectRepository } from "@/data/repositories/project-repository";
import {
  KOSMATCH_INDEXES,
  KOSMATCH_STORES,
  openKosMatchDatabase,
  type KosMatchDatabase,
} from "@/data/indexeddb/database";
import type { AccommodationOption, ComparisonProject } from "@/domain/entities";
import {
  accommodationOptionSchema,
  comparisonProjectSchema,
  kosMatchExportSchema,
} from "@/domain/validation";

export interface AtomicProjectRepository extends ProjectRepository {
  saveProjectBundle(project: ComparisonProject, options: readonly AccommodationOption[]): Promise<void>;
}

export class IndexedDbProjectRepository implements AtomicProjectRepository {
  private readonly databasePromise: Promise<IDBPDatabase<KosMatchDatabase>>;

  constructor(databaseName?: string) {
    this.databasePromise = openKosMatchDatabase(databaseName);
  }

  async listProjects(): Promise<ComparisonProject[]> {
    const database = await this.databasePromise;
    const records = await database.getAllFromIndex(
      KOSMATCH_STORES.projects,
      KOSMATCH_INDEXES.projectsUpdatedAt,
    );

    return records
      .map((record) => comparisonProjectSchema.parse(record))
      .sort((first, second) =>
        second.updatedAt.localeCompare(first.updatedAt) || first.name.localeCompare(second.name, "id"),
      );
  }

  async getProject(id: string): Promise<ComparisonProject | null> {
    const database = await this.databasePromise;
    const record = await database.get(KOSMATCH_STORES.projects, id);
    return record === undefined ? null : comparisonProjectSchema.parse(record);
  }

  async saveProject(project: ComparisonProject): Promise<void> {
    const validated = comparisonProjectSchema.parse(project);
    const database = await this.databasePromise;
    await database.put(KOSMATCH_STORES.projects, validated);
  }

  async deleteProject(id: string): Promise<void> {
    const database = await this.databasePromise;
    const transaction = database.transaction(
      [KOSMATCH_STORES.projects, KOSMATCH_STORES.options],
      "readwrite",
    );
    const optionKeys = await transaction
      .objectStore(KOSMATCH_STORES.options)
      .index(KOSMATCH_INDEXES.optionsProjectId)
      .getAllKeys(id);

    await transaction.objectStore(KOSMATCH_STORES.projects).delete(id);
    for (const optionId of optionKeys) {
      await transaction.objectStore(KOSMATCH_STORES.options).delete(optionId);
    }
    await transaction.done;
  }

  async listOptions(projectId: string): Promise<AccommodationOption[]> {
    const database = await this.databasePromise;
    const records = await database.getAllFromIndex(
      KOSMATCH_STORES.options,
      KOSMATCH_INDEXES.optionsProjectId,
      projectId,
    );

    return records
      .map((record) => accommodationOptionSchema.parse(record))
      .sort((first, second) =>
        first.createdAt.localeCompare(second.createdAt) || first.name.localeCompare(second.name, "id"),
      );
  }

  async getOption(id: string): Promise<AccommodationOption | null> {
    const database = await this.databasePromise;
    const record = await database.get(KOSMATCH_STORES.options, id);
    return record === undefined ? null : accommodationOptionSchema.parse(record);
  }

  async saveOption(option: AccommodationOption): Promise<void> {
    const validated = accommodationOptionSchema.parse(option);
    const database = await this.databasePromise;
    const transaction = database.transaction(
      [KOSMATCH_STORES.projects, KOSMATCH_STORES.options],
      "readwrite",
    );
    const projects = transaction.objectStore(KOSMATCH_STORES.projects);
    const options = transaction.objectStore(KOSMATCH_STORES.options);
    const [project, existing] = await Promise.all([
      projects.get(validated.projectId),
      options.get(validated.id),
    ]);

    if (project === undefined) {
      throw new Error(`Project ${validated.projectId} tidak ditemukan.`);
    }
    if (existing !== undefined && existing.projectId !== validated.projectId) {
      throw new Error("Pilihan kos tidak dapat dipindahkan ke project lain.");
    }

    await options.put(validated);
    await transaction.done;
  }

  async deleteOption(id: string): Promise<void> {
    const database = await this.databasePromise;
    await database.delete(KOSMATCH_STORES.options, id);
  }

  async saveProjectBundle(
    project: ComparisonProject,
    options: readonly AccommodationOption[],
  ): Promise<void> {
    const validated = kosMatchExportSchema.parse({
      format: "kosmatch-project",
      version: 1,
      exportedAt: new Date().toISOString(),
      project,
      options,
    });
    const database = await this.databasePromise;
    const transaction = database.transaction(
      [KOSMATCH_STORES.projects, KOSMATCH_STORES.options],
      "readwrite",
    );
    const projectsStore = transaction.objectStore(KOSMATCH_STORES.projects);
    const optionsStore = transaction.objectStore(KOSMATCH_STORES.options);

    const projectCollision = await projectsStore.getKey(validated.project.id);
    if (projectCollision !== undefined) {
      throw new Error(`Project ${validated.project.id} sudah ada.`);
    }

    for (const option of validated.options) {
      const optionCollision = await optionsStore.getKey(option.id);
      if (optionCollision !== undefined) {
        throw new Error(`Pilihan kos ${option.id} sudah ada.`);
      }
    }

    await projectsStore.add(validated.project);
    for (const option of validated.options) await optionsStore.add(option);
    await transaction.done;
  }

  async getSetting<T>(key: string): Promise<T | null> {
    const database = await this.databasePromise;
    const record = await database.get(KOSMATCH_STORES.settings, key);
    return record === undefined ? null : record.value as T;
  }

  async saveSetting(key: string, value: unknown): Promise<void> {
    const database = await this.databasePromise;
    await database.put(KOSMATCH_STORES.settings, {
      key,
      value,
      updatedAt: new Date().toISOString(),
    });
  }

  async close(): Promise<void> {
    const database = await this.databasePromise;
    database.close();
  }
}
