import { sql } from "@vercel/postgres";
import { Todos } from "./components/Todos";

const getData = async () => {
  /**
   * The "classic" way to query the database in Next.js 12 and below
   */
  /*
  const res = await fetch("/api/todo");
  const data = await res.json();
  return data;
  */

  /**
   * In Next.js 13+ server components, you can query the database directly
   */
  const { rows } = await sql`SELECT * FROM TodoList`;
  return rows;
};

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1>todo app</h1>
      <Todos data={data} />
    </main>
  );
}
