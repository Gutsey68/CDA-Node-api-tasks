import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'azerty',
  database: 'test',
  host: 'localhost',
  port: 5433
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', err => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const db = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } catch (err) {
    console.error('Database query error', err);
    throw err;
  } finally {
    client.release();
  }
};

export default db;
