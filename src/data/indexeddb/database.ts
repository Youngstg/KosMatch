import { deleteDB, openDB, type DBSchema, type IDBPDatabase } from "idb";

import type { AccommodationOption, ComparisonProject } from "@/domain/entities";

export const KOSMATCH_DATABASE_NAME = "kosmatch";
export const KOSMATCH_DATABASE_VERSION = 1;

export const KOSMATCH_STORES = {
  projects: "projects",
  options: "options",
  settings: "settings",
} as const;

export const KOSMATCH_INDEXES = {
  projectsUpdatedAt: "updatedAt",
  optionsProjectId: "projectId",
} as const;

export interface SettingRecord {
  readonly key: string;
  readonly value: unknown;
  readonly updatedAt: string;
}

export interface KosMatchDatabase extends DBSchema {
  projects: {
    key: string;
    value: ComparisonProject;
    indexes: { updatedAt: string };
  };
  options: {
    key: string;
    value: AccommodationOption;
    indexes: { projectId: string };
  };
  settings: {
    key: string;
    value: SettingRecord;
  };
}

type Migration = (database: IDBPDatabase<KosMatchDatabase>) => void;

const migrations: Readonly<Record<number, Migration>> = {
  1(database) {
    const projects = database.createObjectStore(KOSMATCH_STORES.projects, { keyPath: "id" });
    projects.createIndex(KOSMATCH_INDEXES.projectsUpdatedAt, "updatedAt");

    const options = database.createObjectStore(KOSMATCH_STORES.options, { keyPath: "id" });
    options.createIndex(KOSMATCH_INDEXES.optionsProjectId, "projectId");

    database.createObjectStore(KOSMATCH_STORES.settings, { keyPath: "key" });
  },
};

export function openKosMatchDatabase(
  databaseName: string = KOSMATCH_DATABASE_NAME,
): Promise<IDBPDatabase<KosMatchDatabase>> {
  if (globalThis.indexedDB === undefined) {
    return Promise.reject(new Error("IndexedDB tidak tersedia di lingkungan ini."));
  }

  let activeDatabase: IDBPDatabase<KosMatchDatabase> | undefined;
  return openDB<KosMatchDatabase>(databaseName, KOSMATCH_DATABASE_VERSION, {
    upgrade(database, oldVersion, newVersion) {
      const targetVersion = newVersion ?? KOSMATCH_DATABASE_VERSION;
      for (let version = oldVersion + 1; version <= targetVersion; version += 1) {
        const migrate = migrations[version];
        if (migrate === undefined) throw new Error(`Migrasi IndexedDB versi ${version} tidak tersedia.`);
        migrate(database);
      }
    },
    blocking() {
      activeDatabase?.close();
    },
  }).then((database) => {
    activeDatabase = database;
    return database;
  });
}

export async function deleteKosMatchDatabase(databaseName: string = KOSMATCH_DATABASE_NAME): Promise<void> {
  await deleteDB(databaseName);
}
