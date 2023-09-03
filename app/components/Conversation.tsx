"use client";

import { Bubble } from "@/components/Bubble";
import { Message } from "@/utils/types";
import { useEffect, useRef, useState } from "react";

type Props = {
  initialMessages: Array<Message>;
};

export const Conversation = ({
  initialMessages,
}: Props): React.ReactElement => {
  // creating a ref to the HTML list element
  const elementRef = useRef<HTMLUListElement>(null);

  const [messages, setMessages] = useState<Array<Message>>(initialMessages);

  // adding a new message to the list
  const addMessage = (payload: any) => {
    if (payload.eventType === "INSERT") {
      //const updated: Array<Message> = [...messages, payload.new as Message];
      setMessages((prev) => [...prev, payload.new as Message]);
    }
  };

  // when the component in ready on the client
  useEffect(() => {
    
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
              isOwner={true}
              user={'temp'}
              message={message.text}
            />
          </li>
        )
      )}
    </ul>
  );
};