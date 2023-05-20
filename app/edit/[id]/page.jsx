import { Form } from 'app/components/form';

const getData = async (id) => {
  const res = await fetch(`https://mohole-nextws-api.azurewebsites.net/moholemon/${id}`)
  const data = await res.json()
  return data
}

export default async function Edit({params}) {
  const data = await getData(params.id)

  const submit = async (data) => {
    "use server";
    
    console.log(data)
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <section className="card-body">
        <h1 className="text-3xl font-bold">
          Modifica la scheda
        </h1>
        <Form edit={true} submit={submit} data={data} />
      </section>
    </div>
  )
}