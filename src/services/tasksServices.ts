import { tasksRepository } from '../repositories/tasksRespository';

const getlAllTasks = async () => {
  return await tasksRepository.findAll();
};

export const tasksServices = { getlAllTasks };
