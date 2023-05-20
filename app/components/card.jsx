import Link from "next/link";

export const Card = ({ data }) => (
  <article className="card w-full bg-base-100 shadow-xl">
    <figure>
      <img src="https://placehold.co/600x400?text=Moholemon" alt="Shoes" />
    </figure>
    <section className="card-body">
      <h2 className="card-title">{data.name}</h2>
      <p>{data.description}</p>
      <h3 className="font-bold">Abilità</h3>
      <p className="flex flex-wrap gap-1">
        {data.attacks.map((attack, index) => (
          <span key={index} className="badge badge-accent badge-outline">
            {attack}
          </span>
        ))}
      </p>
      <div className="card-actions flex mt-2">
        <Link href={`/edit/${data.id}`} className="btn btn-primary flex-1">
          <svg
            className="inline-block h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"></path>
          </svg>
          modifica
        </Link>
        {/* <button className="btn btn-neutral">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button> */}
      </div>
    </section>
  </article>
);
