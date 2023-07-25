import { Bubble } from "@/components/Bubble";
import { Message } from "@/utils/types";

type Props = {
  messages: Array<Message>;
}

export const Conversation = ({ messages }: Props): React.ReactElement => {
  return (
    <ul>
      {messages.map(
        (message: Message, index: number): JSX.Element => (
          <li key={index} className="my-3">
            <Bubble
              isOwner={message.user.name === 'Obi-Wan Kenobi' ? true : false}
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
