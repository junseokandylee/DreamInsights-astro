// D1 (Cloudflare SQLite) database client for CF Pages Workers
// Uses import { env } from 'cloudflare:workers' which wrangler resolves at deploy time
// Falls back to empty results when D1 binding is unavailable (local dev)

import { env } from 'cloudflare:workers';

interface D1Result<T = Record<string, unknown>> {
  results: T[];
  success: boolean;
  meta?: { duration: number; changes: number; last_row_id: number };
}

type D1Database = {
  prepare(sql: string): {
    bind(...params: unknown[]): Promise<D1Result>;
    all(): Promise<D1Result>;
    run(): Promise<D1Result>;
    first<T = Record<string, unknown>>(colName?: string): Promise<T | null>;
  };
};

function getDB(): D1Database | undefined {
  try {
    const db = (env as any).DB;
    if (db) return db as D1Database;
  } catch {}
  return undefined;
}

export async function query<T = Record<string, unknown>>(
  sql: string,
  params: unknown[] = []
): Promise<T[]> {
  const db = getDB();
  if (!db) return [];

  try {
    const stmt = db.prepare(sql);
    const result = params.length > 0 ? await stmt.bind(...params).all<T>() : await stmt.all<T>();
    return result.results ?? [];
  } catch (e) {
    console.error('D1 query error:', e);
    return [];
  }
}

export async function queryOne<T = Record<string, unknown>>(
  sql: string,
  params: unknown[] = []
): Promise<T | null> {
  const db = getDB();
  if (!db) return null;

  try {
    const stmt = db.prepare(sql);
    const result = params.length > 0 ? await stmt.bind(...params).first<T>() : await stmt.first<T>();
    return result ?? null;
  } catch (e) {
    console.error('D1 queryOne error:', e);
    return null;
  }
}

export async function run(sql: string, params: unknown[] = []): Promise<void> {
  const db = getDB();
  if (!db) return;

  try {
    const stmt = db.prepare(sql);
    if (params.length > 0) await stmt.bind(...params).run();
    else await stmt.run();
  } catch (e) {
    console.error('D1 run error:', e);
  }
}
