"use client";

import supabase from "@/utils/supabase";
import { FormEvent, useEffect, useState } from "react";
import { SignIn } from "./SignIn";

export const Compose = (): React.ReactElement => {
  const [loggedUser, setLoggedUser] = useState<any>();
  const [text, setText] = useState<string>("");

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setLoggedUser(user?.user_metadata);
  };

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setText("");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <footer className="fixed left-0 bottom-0 p-4 w-full">
      {loggedUser ? (
        <form onSubmit={onSubmit} className="join w-full">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input join-item w-full input-bordered input-accent"
            placeholder="scrivi qui"
          />
          <button className="btn btn-accent join-item">Invia</button>
        </form>
      ) : (
        <SignIn />
      )}
    </footer>
  );
};
