interface Props {
  url?: string;
  name: string;
}

export const Avatar = ({ url, name }: Props): React.ReactElement => {
  const letter: string = name
    .split(" ")
    .filter((_e: string, i: number): boolean => i < 2)
    .map((e: string): string => e.charAt(0).toUpperCase())
    .join("");

  const image: JSX.Element = (
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img src={url} alt={name} />
      </div>
    </div>
  );

  const placeholder: JSX.Element = (
    <div className="chat-image avatar placeholder">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
        <span className="text-lg">{letter}</span>
      </div>
    </div>
  );

  return url ? image : placeholder;
};
