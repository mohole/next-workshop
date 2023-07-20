import { Message } from "@/components/Message";

interface Message {
  user: string;
  text: string;
  timestamp: string;
  channel: string;
}

const mock: Array<Message> = [
  {
    user: "Obi-Wan Kenobi",
    text: "You were the chosen one!",
    timestamp: "2023-07-18T11:43:57.863Z",
    channel: "general",
  },
  {
    user: "Anakin Skywalker",
    text: "I hate you",
    timestamp: "2023-07-18T11:46:17.138Z",
    channel: "general",
  },
];

export const Conversation = (): React.ReactElement => {
  return (
    <ul>
      {mock.map(
        (message: Message, index: number): JSX.Element => (
          <li key={index} className="my-3">
            <Message
              isOwner={message.user === 'Obi-Wan Kenobi' ? true : false}
              user={message.user}
              message={message.text}
              timestamp={message.timestamp}
            />
          </li>
        )
      )}
    </ul>
  );
};
