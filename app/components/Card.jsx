import Link from 'next/link'
import { formatDistance } from 'date-fns'
import { it } from 'date-fns/locale'

export const Card = ({ data }) => {
  const distance = formatDistance(new Date(data.creation), new Date(), {
    addSuffix: true,
    locale: it
  })

  return (
    <article className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={data.picture} alt={data.name} />
      </figure>
      <section className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.description}</p>
        <h3 className="font-bold">Abilità:</h3>
        <p className="flex flex-wrap gap-1">{data.attacks.map(
          (attack,index) => <span className="badge badge-accent badge-outline" key={index}>{attack}</span>)  }
        </p>
        <p><small>Scheda creata {distance}</small></p>
        <div className="card-actions mt-2">
          <Link className="btn btn-primary w-full" href={`/edit/${data.id}`}>Modifica</Link>
        </div>
      </section>
    </article>
  )
}