"use client";

import { useState } from "react";

import { Input } from "./Input";
import { Switch } from "./Switch";
import { Item } from "./Item";

export const Todos = ({ data }) => {
  /**
   * boolean state to toggle between all and active todos
   */
  const [all, setAll] = useState(false);

  /**
   * array state to hold todos, initially populated with data from the server
   */
  const [items, setItems] = useState(data);

  /**
   * when a new todo is created, we add it to the server
   * and then we update the local state to reflect the change
   */
  const onCreate = (todo) => setItems([...items, todo]);

  /**
   *  when a delete button is clicked, the todo is deleted from the server
   *  and then we update the local state to reflect the change
   */
  const onDelete = async (id) => {
    fetch(`/api/todo/${id}`, { method: "DELETE" });

    const updatedItems = items.filter((todo) => todo.id !== id);
    setItems(updatedItems);
  };

  /**
   * when a checkbox is clicked, the todo is updated on the server
   * and then we update the local state to reflect the change
   */
  const onUpdate = async (id, done) => {
    fetch(`/api/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: !done }),
    });

    const updatedItems = items.map((todo) =>
      todo.id === id ? { ...todo, done: !done } : todo
    );
    setItems(updatedItems);
  };

  return (
    <section>
      <Input onCreate={onCreate} />
      <small>
        Total: {items.length} items -{" "}
        {items.filter((todo) => todo.done === true).length} completed
      </small>
      <Switch checked={all} callback={() => setAll(!all)} />
      <ul>
        {items
          .filter((todo) => (all ? true : todo.done === false))
          .map((todo) => (
            <li key={todo.id}>
              <Item
                id={todo.id}
                text={todo.text}
                done={todo.done}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
