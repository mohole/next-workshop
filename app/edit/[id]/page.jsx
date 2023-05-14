
const getData = async (id) => {
  const res = await fetch(`https://mohole-nextws-api.azurewebsites.net/moholemon/${id}`)
  const data = await res.json()
  return data
}

export default async function Edit({params}) {
  const data = await getData(params.id)

  return (
    <>
      <p>{JSON.stringify(data, null, 2)}</p>
    </>
  )
}