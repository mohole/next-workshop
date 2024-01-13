import { Form } from "../components/Form";

export default function Add() {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <section className="card-body">
        <h1 className="text-3xl font-bold">
          Aggiungi un nuovo Moholemon all'archivio
        </h1>

        <Form />
      </section>
    </div>
  );
}
