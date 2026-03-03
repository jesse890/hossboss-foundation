import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

export const isDatabaseAvailable = !!process.env.DATABASE_URL;

if (isDatabaseAvailable) {
  console.log("[startup] DATABASE_URL is set — database mode enabled");
} else {
  console.warn("[startup] DATABASE_URL is NOT set — running in degraded mode (no database)");
}

export const pool = isDatabaseAvailable
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

export const db = pool
  ? drizzle(pool, { schema })
  : (null as unknown as NodePgDatabase<typeof schema>);
