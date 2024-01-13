import { Card } from "./components/Card";
import { Hero } from "./components/Hero";

const getData = async () => {
  const res = await fetch("https://mohole-nextws-api.azurewebsites.net/moholemon")
  const data = await res.json()
  return data
}

export default async function Home() {
  const items = await getData()

  return (
    <>
      <Hero />
      <section className="my-8 px-6">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          { /* items.map((item, index) => <li key={index}>{item.name}</li> ) */ }
          { items.map((item, index) => <li key={index}>
            <Card data={item} />
          </li> ) }
        </ul>
      </section>
    </>
  )
}
