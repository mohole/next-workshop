import { ListCharacters } from "./components/ListCharacters"
import { Pagination } from "./components/Pagination"

/**
 * This method get the data from the API on server side
 */
const getData = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  return data
}

/**
 * The page component that will be rendered when the data is ready
 */
export default async function Home() {
  const data = await getData()

  return (
    <main>
      {/* <p>pages {data.info.pages}, characters {data.info.count}, page items {data.results.length}</p> */}
      <ListCharacters characters={data.results} />
      <Pagination prev={data.info.prev} next={data.info.next} />
    </main>
  )
}
