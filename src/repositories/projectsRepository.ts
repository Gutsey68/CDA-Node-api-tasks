import { db } from '../database/db';

const findAll = async () => {
  const result = await db('SELECT * FROM projects');
  return result.rows;
};

export const projectsRepository = { findAll };
