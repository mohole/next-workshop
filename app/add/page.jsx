"use client"

import { useRouter } from 'next/navigation';

import { Form } from 'app/components/form';

export default function Add() {
  const router = useRouter();

  /**
   * SERVER ACTION function
   * https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
   */
  const submit = async (data) => {

    console.log(data)

    const res = await fetch("https://mohole-nextws-api.azurewebsites.net/moholemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await res.json()
    console.log(result, result.id)
    router.push(`/`)
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <section className="card-body">
        <h1 className="text-3xl font-bold">
          Aggiungi un nuovo Moholemon all'archivio
        </h1>
        <Form edit={false} submit={submit} />
      </section>
    </div>
  );
}
