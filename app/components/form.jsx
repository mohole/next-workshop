"use client";

import { useState } from "react";

export const Form = ({ edit, submit, data }) => {
  const [name, setName] = useState(data?.name || "");
  const [picture, setPicture] = useState(data?.picture || "");
  const [description, setDescription] = useState(data?.description || "");
  const [age, setAge] = useState(data?.age || 1);
  const [attacks, setAttacks] = useState(data?.attacks || []);

  const createObject = (id) => {
    return {
      id: data?.id,
      name,
      picture,
      description,
      age,
      attacks,
      // favorite: false,
      creation: new Date(),
    };
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const obj = createObject(data?.id);
    submit(obj)
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label className="label">Nome del moholemon:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Riggiochu"
          className="focus:input-primary input input-bordered w-full max-w-xl"
        />
      </fieldset>

      <fieldset>
        <label className="label">Immagine della creatura:</label>
        <input
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          type="url"
          placeholder="inserisci un url qui"
          className="focus:input-primary input input-bordered w-full max-w-xl"
        />
      </fieldset>

      <fieldset>
        <label className="label">Descrizione:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="url"
          className="focus:input-primary textarea textarea-bordered w-full max-w-xl"
        />
      </fieldset>

      <fieldset>
        <label className="label">Età stimata del moholemon:</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          min={1}
          max={20}
          step={1}
          className="focus:input-primary input input-bordered w-full max-w-xl"
        />
      </fieldset>

      <fieldset>
        <label className="label">Abilità:</label>
        <input
          value={attacks.join(",")}
          onChange={(e) => setAttacks(e.target.value.split(","))}
          type="text"
          placeholder="elenca le abilità separandole con una virgola"
          className="focus:input-primary input input-bordered w-full max-w-xl"
        />
      </fieldset>

      <div className="my-7 flex gap-5">
        <button className="btn btn-primary btn-lg">{edit ? 'Modifica scheda' : 'Crea scheda' }</button>
        {edit && <button className="btn btn-error btn-lg">Elimina scheda</button> }
      </div>
    </form>
  );
};
