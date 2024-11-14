import { db } from '../database/db';

const findAll = async () => {
  const result = await db('SELECT * FROM comments');
  return result.rows;
};

export const commentsRepository = { findAll };
