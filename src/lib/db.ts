import postgres from 'postgres';

let sql: ReturnType<typeof postgres> | null = null;

try {
  if (process.env.DATABASE_URL) {
    sql = postgres(process.env.DATABASE_URL, {
      max: 10,
      idle_timeout: 30,
      connect_timeout: 5,
      statement_timeout: 5000,
    });
  }
} catch (e) {
  console.error('DB init failed:', e);
}

export async function query<T = any>(text: string, params?: any[]): Promise<T[]> {
  if (!sql) return [];
  try {
    return await sql.unsafe<T>(text, params as any[]);
  } catch (e) {
    console.error('DB query error:', e);
    return [];
  }
}

export async function queryOne<T = any>(text: string, params?: any[]): Promise<T | null> {
  const rows = await query<T>(text, params);
  return rows[0] ?? null;
}

export default sql;
