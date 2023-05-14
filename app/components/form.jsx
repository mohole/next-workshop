"use client";

import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState(1);
  const [attacks, setAttacks] = useState([])

  const createObject = (id) => {
    return {
      id,
      name,
      picture,
      description,
      age,
      attacks,
      favorite: false,
      creation: new Date()
    }
  }

  return (
    <form>
      <fieldset>
        <label className="label">Nome del moholemon</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Riggiochu"
          className="focus:input-primary input input-bordered w-full max-w-xs"
        />
      </fieldset>
    </form>
  );
};
