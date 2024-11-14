import { commentsRepository } from '../repositories/commentsRepository';

const getlAllComments = async () => {
  return await commentsRepository.findAll();
};

export const commentsServices = { getlAllComments };
