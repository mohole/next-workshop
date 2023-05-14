
import { Hero } from './components/hero'
import { Card } from './components/card'

const getData = async () => {
  const res = await fetch('https://mohole-nextws-api.azurewebsites.net/moholemon')
  const data = await res.json()
  return data
}

export default async function Home() {
  const data = await getData()
  const items = Array(7).fill(data).flat()

  return (
    <>
      <Hero />
      <section className="px-6 sm:px-0 my-8">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => <li key={index}><Card data={item} /></li>)}
        </ul>
      </section>
    </>
  )
}
