import { User } from "@/utils/types";
import { Avatar } from "./Avatar";

type Props = {
  isOwner: boolean;
  user: User;
  message: string;
  timestamp: string;
}

export const Bubble = ({
  isOwner,
  user,
  message,
  timestamp,
}: Props): React.ReactElement => {
  const align: string = ["chat", isOwner ? "chat-start" : "chat-end"].join(" ");
  const color: string = ["chat-bubble", isOwner && "chat-bubble-accent"].join(" ");
  const time: string = new Date(timestamp).toLocaleString();

  return (
    <div className={align}>
      <Avatar name={user.name} url={user.photo} />
      <div className="chat-header">
        {user.name} <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className={color}>{message}</div>
    </div>
  );
};
