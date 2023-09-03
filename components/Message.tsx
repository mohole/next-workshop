import { Avatar } from "./Avatar";

interface Props {
  isOwner: boolean;
  user: string;
  message: string;
  timestamp: string;
}

export const Message = ({
  isOwner,
  user,
  message,
  timestamp,
}: Props): React.ReactElement => {
  const align: string = ["chat", isOwner ? "chat-start" : "chat-end"].join(" ");
  const time: string = new Date(timestamp).toLocaleString();

  return (
    <div className={align}>
      <Avatar name={user} />
      <div className="chat-header">
        {user} <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble">{message}</div>
      {/* <div className="chat-footer opacity-50">Delivered</div> */}
    </div>
  );
};
