import { projectsRepository } from '../repositories/projectsRepository';

const getlAllProjects = async () => {
  return await projectsRepository.findAll();
};

const createProject = async (name: string, description: string, due_date: string, owner_id: number) => {
  const existingProject = await projectsRepository.findByName(name);

  if (existingProject) {
    throw new Error('Project name is already used');
  }

  return await projectsRepository.create(name, description, due_date, owner_id);
};

const deleteProject = async (projectId: number) => {
  const deletedProject = await projectsRepository.findById(projectId);

  if (!deletedProject) {
    throw new Error('Project not found');
  }

  return await projectsRepository.deleted(projectId);
};

const getProjectById = async (projectId: number) => {
  const project = await projectsRepository.findById(projectId);

  if (!project) {
    throw new Error('Project not found');
  }

  return project;
};

const updateProject = async (projectId: number, newDescription: string, newDueDate: string) => {
  const updatedProject = await projectsRepository.findById(projectId);

  if (!updatedProject) {
    throw new Error('Project not found');
  }

  return await projectsRepository.update(projectId, newDescription, newDueDate);
};

export const projectsServices = { getlAllProjects, createProject, deleteProject, getProjectById, updateProject };
