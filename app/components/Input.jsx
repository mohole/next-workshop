"use client";

import { useState } from "react";

export const Input = ({ onCreate }) => {
  const [text, setText] = useState("");

  /**
   * when the form is submitted, we add the todo to the server
   * and then we dispatch the new todo to the parent component
   */
  const onSubmit = async (e) => {
    e.preventDefault(); // prevent the form from refreshing the page

    const res = await fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const { id } = await res.json(); // get the id of the new todo

    onCreate({ text, done: false, id });

    setText(""); // reset the input field
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
    </form>
  );
};
