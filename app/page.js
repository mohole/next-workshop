
import { Hero } from './components/hero'
import { Card } from './components/card'

const mock = Array(16).fill('temp')

export default function Home() {

  return (
    <>
      <Hero />
      <ul className="px-6 sm:px-0 my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mock.map((_e, i) => <li key={i}><Card /></li>)}
      </ul>
    </>
  )
}
