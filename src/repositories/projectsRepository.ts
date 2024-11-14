import { db } from '../database/db';

const findAll = async () => {
  const result = await db('SELECT * FROM projects');
  return result.rows;
};

const create = async (name: string, description: string, due_date: string, owner_id: number) => {
  const result = await db(
    'INSERT INTO Projects (name, description, due_date, owner_id, created_at, updated_at) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
    [name, description, due_date, owner_id]
  );
  return result.rows[0];
};

const deleted = async (projectId: number) => {
  const result = await db('DELETE FROM projects WHERE id = $1 RETURNING *', [projectId]);
  return result.rows[0];
};

const findById = async (projectId: number) => {
  const result = await db('SELECT * FROM projects WHERE id = $1', [projectId]);
  return result.rows[0];
};

const update = async (projectId: number, newDescription: string, newDueDate: string) => {
  const result = await db('UPDATE projects SET description = $1, due_date = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *', [
    newDescription,
    newDueDate,
    projectId
  ]);
  return result.rows[0];
};

const findByName = async (name: string) => {
  const result = await db('SELECT * FROM projects WHERE name = $1', [name]);
  return result.rows[0];
};

export const projectsRepository = { findAll, create, deleted, findById, update, findByName };
