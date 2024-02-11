import { sql } from "@vercel/postgres";
import { Todos } from "./components/Todos";
import { revalidatePath } from "next/cache";

const getData = async () => {
  /**
   * Revalidate the path when the data changes (avoid cache)
   */
  revalidatePath("/");

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
