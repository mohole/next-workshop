"use client";

import supabase from "@/utils/supabase";
import { FormEvent, useState } from "react";
import { Message } from "@/utils/types";
import { getLoggedUser } from "@/utils/getUser";
import { SignIn } from "./SignIn";

type Props = {
  current: string
}

export const Compose = ({ current }: Props): React.ReactElement => {
  const loggedUser = getLoggedUser();
  const [text, setText] = useState<string>("");

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
