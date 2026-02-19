import { Pool } from "pg";
import "env";

export const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});



db.query("SELECT 1")
  .then(() => console.log("Connected to Postgres"))
  .catch((err) => {
    console.error("DB connection failed", err);
    process.exit(1); // fail fast
});
