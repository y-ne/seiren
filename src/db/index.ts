import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
	connectionString: process.env.DATABASE_URL!,
	keepAlive: true, // keep idle connections open
	allowExitOnIdle: false, // keep the event loop alive even if there are no active clients
	max: 20, // maximum number of clients in the pool
	idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
	connectionTimeoutMillis: 2000, // how long to wait for a connection to be established
});

export const db = drizzle({ client: pool });