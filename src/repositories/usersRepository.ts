import { db } from '../database/db';

const findAll = async () => {
  const result = await db('SELECT * FROM users');
  return result.rows;
};

const create = async (username: string, email: string, password: string, role: number) => {
  const result = await db(
    'INSERT INTO Users (username, email, password, role, created_at, updated_at) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
    [username, email, password, role]
  );
  return result.rows[0];
};

const deleted = async (userId: number) => {
  const result = await db('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
  return result.rows[0];
};

const findById = async (userId: number) => {
  const result = await db('SELECT * FROM users WHERE id = $1', [userId]);
  return result.rows[0];
};

const update = async (userId: number, newUsername: string) => {
  const result = await db('UPDATE users SET username = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *', [newUsername, userId]);
  return result.rows[0];
};

const findByEmail = async (email: string) => {
  const result = await db('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

export const usersRepository = { findAll, create, deleted, findById, update, findByEmail };
