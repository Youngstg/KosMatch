import type { AccommodationOption, ComparisonProject } from "@/domain/entities";
import type { ProjectRepository } from "@/data/repositories/project-repository";

function clone<T>(value: T): T {
  return structuredClone(value);
}

export class InMemoryProjectRepository implements ProjectRepository {
  private readonly projects = new Map<string, ComparisonProject>();
  private readonly options = new Map<string, AccommodationOption>();

  constructor(projects: readonly ComparisonProject[] = [], options: readonly AccommodationOption[] = []) {
    for (const project of projects) this.projects.set(project.id, clone(project));
    for (const option of options) {
      if (!this.projects.has(option.projectId)) throw new Error(`Project ${option.projectId} tidak ditemukan.`);
      this.options.set(option.id, clone(option));
    }
  }

  async listProjects(): Promise<ComparisonProject[]> {
    return [...this.projects.values()].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.name.localeCompare(b.name, "id")).map(clone);
  }
  async getProject(id: string): Promise<ComparisonProject | null> {
    const project = this.projects.get(id);
    return project === undefined ? null : clone(project);
  }
  async saveProject(project: ComparisonProject): Promise<void> {
    this.projects.set(project.id, clone(project));
  }
  async deleteProject(id: string): Promise<void> {
    this.projects.delete(id);
    for (const [optionId, option] of this.options) if (option.projectId === id) this.options.delete(optionId);
  }
  async listOptions(projectId: string): Promise<AccommodationOption[]> {
    return [...this.options.values()].filter((option) => option.projectId === projectId).sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.name.localeCompare(b.name, "id")).map(clone);
  }
  async getOption(id: string): Promise<AccommodationOption | null> {
    const option = this.options.get(id);
    return option === undefined ? null : clone(option);
  }
  async saveOption(option: AccommodationOption): Promise<void> {
    if (!this.projects.has(option.projectId)) throw new Error(`Project ${option.projectId} tidak ditemukan.`);
    this.options.set(option.id, clone(option));
  }
  async deleteOption(id: string): Promise<void> {
    this.options.delete(id);
  }
}
