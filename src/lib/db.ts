/**
 * Astro-specific database wrapper
 * Directly connects to PostgreSQL without going through DreamInsights shared code.
 * Avoids Vite symlink resolution issues with @/ path aliases.
 */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

export async function query<T = any>(sql: string, params?: any[]): Promise<T[]> {
  const result = await pool.query(sql, params);
  return result.rows as T[];
}

export async function queryOne<T = any>(sql: string, params?: any[]): Promise<T | null> {
  const result = await pool.query(sql, params);
  return (result.rows[0] as T) || null;
}

export default pool;
