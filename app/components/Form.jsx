"use client";

import { useState } from "react"

export const Form = () => {
  const [name, setName] = useState("")
  // let name = ""

  const onSubmit = () => {
    const obj = {
      name: name
    }
  }

  return (
    <form>
      <fieldset>
        <label className="label">Nome del Moholemon:</label>
        <input
          required
          value={name}
          onChange={e => setName(e.target.value)}
          type="text" 
          placeholder="Riggiochu"
          className="input input-bordered w-full focus:input-primary"
        />
      </fieldset>

      <fieldset>
        <label className="label">Immagine della creatura:</label>
        <input 
          type="url" 
          placeholder="inserisci una URL qui"
          className="input input-bordered w-full focus:input-primary"
        />
      </fieldset>

      <fieldset>
        <label className="label">Descrizione:</label>
        <textarea 
          className="textarea textarea-bordered w-full focus:textarea-primary"
        />
      </fieldset>

      <fieldset>
        <label className="label">Età stimata del moholemon:</label>
        <input 
          type="number"
          min={1}
          max={20}
          step={1}
          className="input input-bordered w-full focus:input-primary"
        />
      </fieldset>

      <fieldset>
        <label className="label">Abilità:</label>
        <input 
          type="text" 
          placeholder="elenca le abilità separandole con una virgola"
          className="input input-bordered w-full focus:input-primary"
        />
      </fieldset>

      <div className="my-7">
        <button className="btn btn-primary btn-lg">Crea scheda</button>
      </div>
    </form>
  )
}