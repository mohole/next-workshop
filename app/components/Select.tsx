"use client";

import { useRouter } from "next/navigation";
import { Channel } from "@/utils/types";

type Props = {
  channels: Array<Channel>;
  current: string;
};

export const Select = ({
  channels = [],
  current,
}: Props): React.ReactElement => {
  const router = useRouter();

  // when the select changes, redirect to the new channel
  const changeChannel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    router.push(`/channel/${value}`);
  };

  return (
    <select
      className="select select-accent w-full mb-5"
      value={current}
      onChange={changeChannel}
    >
      {channels.map((channel: Channel) => (
        <option key={channel.id} value={channel.id}>{channel.name}</option>
      ))}
    </select>
  );
};
