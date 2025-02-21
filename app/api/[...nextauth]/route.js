import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

export async function GET(request) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM jsdsa"); // Replace 'blogs' with your table name
    client.release();

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
