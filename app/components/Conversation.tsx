"use client";

import { Bubble } from "@/components/Bubble";
import { Message } from "@/utils/types";
import { useLoggedUser } from "@/utils/getUser";
import { useEffect, useRef, useState } from "react";
import supabase from "@/utils/supabase";

type Props = {
  initialMessages: Array<Message>;
};

export const Conversation = ({
  initialMessages,
}: Props): React.ReactElement => {
  // creating a ref to the HTML list element
  const elementRef = useRef<HTMLUListElement>(null);

  const [messages, setMessages] = useState<Array<Message>>(initialMessages);
  const loggedUser = useLoggedUser();

  // adding a new message to the list
  const addMessage = (payload: any) => {
    console.log(payload);
    console.log(messages.length);
    if (payload.eventType === "INSERT") {
      //const updated: Array<Message> = [...messages, payload.new as Message];
      setMessages((prev) => [...prev, payload.new as Message]);
    }
  };

  // when the component in ready on the client
  useEffect(() => {
    // subscribing to real-time updates to the "messages" table
    supabase
      .channel("any")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => addMessage(payload)
      )
      .subscribe();
    
    // casting (forcing) the type of the ref 
    const current = elementRef?.current as HTMLUListElement;
    
    // scrolling to the bottom of the list
    current.scrollTop = current.scrollHeight;
  }, []);

  return (
    <ul className="h-96 overflow-y-scroll" ref={elementRef}>
      {messages.map(
        (message: Message, index: number): JSX.Element => (
          <li key={index} className="my-3">
            <Bubble
              isOwner={
                message.user.name === loggedUser?.full_name ? true : false
              }
              user={message.user}
              message={message.text}
              timestamp={message.created_at}
            />
          </li>
        )
      )}
    </ul>
  );
};
