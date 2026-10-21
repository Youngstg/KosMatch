import type { AtomicProjectRepository } from "@/data/indexeddb";
import type { ProjectRepository } from "@/data/repositories/project-repository";
import type { AccommodationOption, ComparisonProject } from "@/domain/entities";
import {
  idSchema,
  kosMatchExportSchema,
  type KosMatchExport,
} from "@/domain/validation";

export class ProjectImportError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ProjectImportError";
  }
}

export interface ProjectImportPreview {
  readonly projectName: string;
  readonly optionCount: number;
  readonly exportedAt: string;
  readonly payload: KosMatchExport;
}

export interface ImportedProjectBundle {
  readonly project: ComparisonProject;
  readonly options: readonly AccommodationOption[];
}

type IdFactory = () => string;

function defaultIdFactory(): string {
  if (globalThis.crypto?.randomUUID === undefined) {
    throw new Error("Generator UUID yang aman tidak tersedia.");
  }
  return globalThis.crypto.randomUUID();
}

function nextFreshId(idFactory: IdFactory, excludedIds: Set<string>): string {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const id = idSchema.parse(idFactory());
    if (!excludedIds.has(id)) {
      excludedIds.add(id);
      return id;
    }
  }
  throw new Error("Tidak dapat menghasilkan ID import yang unik.");
}

export async function createProjectExport(
  repository: ProjectRepository,
  projectId: string,
  exportedAt: Date = new Date(),
): Promise<KosMatchExport> {
  const project = await repository.getProject(projectId);
  if (project === null) throw new Error(`Project ${projectId} tidak ditemukan.`);

  const options = await repository.listOptions(projectId);
  return kosMatchExportSchema.parse({
    format: "kosmatch-project",
    version: 1,
    exportedAt: exportedAt.toISOString(),
    project,
    options,
  });
}

export async function exportProjectAsJson(
  repository: ProjectRepository,
  projectId: string,
  exportedAt: Date = new Date(),
): Promise<string> {
  const backup = await createProjectExport(repository, projectId, exportedAt);
  return JSON.stringify(backup, null, 2);
}

export const MAX_IMPORT_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export function generateBackupFilename(projectName: string): string {
  const clean = projectName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `kosmatch-${clean || "backup"}.json`;
}

export function parseProjectImport(
  json: string,
  maxBytes: number = MAX_IMPORT_SIZE_BYTES,
): ProjectImportPreview {
  if (json.length > maxBytes) {
    throw new ProjectImportError(
      `Ukuran file import (${Math.round(json.length / 1024)} KB) melebihi batas maksimum ${Math.round(maxBytes / (1024 * 1024))} MB.`,
    );
  }

  let unknownPayload: unknown;
  try {
    unknownPayload = JSON.parse(json);
  } catch (error) {
    throw new ProjectImportError("File import bukan JSON yang valid.", { cause: error });
  }

  const result = kosMatchExportSchema.safeParse(unknownPayload);
  if (!result.success) {
    throw new ProjectImportError("File import tidak sesuai format KosMatch versi 1.", {
      cause: result.error,
    });
  }

  return {
    projectName: result.data.project.name,
    optionCount: result.data.options.length,
    exportedAt: result.data.exportedAt,
    payload: result.data,
  };
}

export async function confirmProjectImport(
  preview: ProjectImportPreview,
  repository: AtomicProjectRepository,
  idFactory: IdFactory = defaultIdFactory,
): Promise<ImportedProjectBundle> {
  const source = kosMatchExportSchema.parse(preview.payload);
  const excludedIds = new Set<string>([
    source.project.id,
    ...source.options.map(({ id }) => id),
    ...source.options.flatMap(({ verificationQuestions }) =>
      verificationQuestions.map(({ id }) => id),
    ),
  ]);
  const projectId = nextFreshId(idFactory, excludedIds);
  const optionIdMap = new Map<string, string>();

  for (const option of source.options) {
    optionIdMap.set(option.id, nextFreshId(idFactory, excludedIds));
  }

  const project: ComparisonProject = {
    ...source.project,
    id: projectId,
    favoriteOptionId:
      source.project.favoriteOptionId === null
        ? null
        : (optionIdMap.get(source.project.favoriteOptionId) ?? null),
  };
  const options: AccommodationOption[] = source.options.map((option) => ({
    ...option,
    id: optionIdMap.get(option.id) as string,
    projectId,
    verificationQuestions: option.verificationQuestions.map((question) => ({
      ...question,
      id: nextFreshId(idFactory, excludedIds),
    })),
  }));

  const validated = kosMatchExportSchema.parse({
    ...source,
    project,
    options,
  });
  await repository.saveProjectBundle(validated.project, validated.options);

  return { project: validated.project, options: validated.options };
}
