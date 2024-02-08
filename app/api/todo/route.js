import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * when GET /api/todo, we want run a query that returns all the tasks from the database
 */
export async function GET() {
  const { rows } = await sql`SELECT * FROM TodoList`;

  return NextResponse.json(rows);
}

/**
 * when POST /api/todo, take the data in the request body and insert it into the database
 */
export async function POST(request) {
  const req = await request.json();
  const { rows } =
    await sql`INSERT INTO TodoList (text, done) VALUES (${req.text}, false) RETURNING id`;

  return NextResponse.json({ message: "Created new task", id: rows[0].id });
}
