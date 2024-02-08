import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * when DELETE /api/todo/[id], take the id from the URL and delete the task from the database
 */
export async function DELETE(_request, { params }) {
  const { id } = params;
  await sql`DELETE FROM TodoList WHERE id = ${id};`;

  return NextResponse.json({ message: `Deleted task ${id}` });
}

/**
 * when PUT /api/todo/[id], take the id from the URL and the data from the request body and update the task in the database
 */
export async function PUT(request, { params }) {
  const { id } = params;
  const req = await request.json();
  await sql`UPDATE TodoList SET done = ${req.done} WHERE id = ${id}`;

  return NextResponse.json({ message: `Updated task ${id}` });
}
