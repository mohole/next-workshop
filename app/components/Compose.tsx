"use client";

import supabase from "@/utils/supabase";
import { FormEvent, useEffect, useState } from "react";
import { Message } from "@/utils/types";
import { SignIn } from "./SignIn";

type Props = {
  current: string
}

export const Compose = ({ current }: Props): React.ReactElement => {
  const [loggedUser, setLoggedUser] = useState<any>();
  const [text, setText] = useState<string>("");

  // getting the logged user
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setLoggedUser(user?.user_metadata);
  };

  // sending the message to Supabase
  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const newMessage: Message = {
      text,
      created_at: new Date().toISOString(),
      channel: current,
      user: {
        name: loggedUser?.full_name,
        photo: loggedUser?.avatar_url,
      }
    }

    const { error } = await supabase
      .from("messages")
      .insert(newMessage);

    !error && setText("");
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
