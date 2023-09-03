import { Avatar } from "./Avatar";

type Props = {
  isOwner: boolean;
  user: string;
  message: string;
};

export const Bubble = ({
  isOwner,
  user,
  message,
}: Props): React.ReactElement => {
  const align: string = ["chat", isOwner ? "chat-start" : "chat-end"].join(" ");
  const color: string = ["chat-bubble", isOwner && "chat-bubble-accent"].join(
    " "
  );

  return (
    <div className={align}>
      <Avatar name={user} url={""} />
      <div className="chat-header">{user}</div>
      <div className={color}>{message}</div>
    </div>
  );
};
