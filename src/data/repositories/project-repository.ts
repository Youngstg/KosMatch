import type { AccommodationOption, ComparisonProject } from "@/domain/entities";

export interface ProjectRepository {
  listProjects(): Promise<ComparisonProject[]>;
  getProject(id: string): Promise<ComparisonProject | null>;
  saveProject(project: ComparisonProject): Promise<void>;
  deleteProject(id: string): Promise<void>;
  listOptions(projectId: string): Promise<AccommodationOption[]>;
  getOption(id: string): Promise<AccommodationOption | null>;
  saveOption(option: AccommodationOption): Promise<void>;
  deleteOption(id: string): Promise<void>;
}
