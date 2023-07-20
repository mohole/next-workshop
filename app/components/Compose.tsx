"use client";

import { FormEvent, useState } from "react";

export const Compose = (): React.ReactElement => {
  const [text, setText] = useState<string>("");

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setText("");
  }

  return (
    <form onSubmit={onSubmit} className="join w-full">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input join-item w-full"
        placeholder="scrivi qui"
      />
      <button className="btn btn-accent join-item">Invia</button>
    </form>
  );
};
