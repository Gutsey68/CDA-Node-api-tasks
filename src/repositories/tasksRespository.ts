import { db } from '../database/db';

const findAll = async () => {
  const result = await db('SELECT * FROM tasks');
  return result.rows;
};

export const tasksRepository = { findAll };
