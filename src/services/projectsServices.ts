import { projectsRepository } from '../repositories/projectsRepository';

const getlAllProjects = async () => {
  return await projectsRepository.findAll();
};

export const projectsServices = { getlAllProjects };
