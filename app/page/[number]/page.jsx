import { ListCharacters } from "./../../components/ListCharacters";
import { Pagination } from "./../../components/Pagination";

/**
 * This method get the data from the API on server side
 */
const getData = async (page) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const data = await res.json();
  return data;
};

/**
 * The page component that will be rendered when the data is ready
 */
export default async function Page({ params }) {
  const data = await getData(params.number);

  return (
    <main>
      <ListCharacters characters={data.results} />
      <Pagination prev={data.info.prev} next={data.info.next} />
    </main>
  );
}
