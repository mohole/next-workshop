import { Select } from "@/components/Select";
import { Compose } from "@/components/Compose";
import { Conversation } from "@/components/Conversation";
import { Header } from "@/components/Header";
import supabase from "@/utils/supabase";
import { Channel, Message } from "@/utils/types";

export default async function Channel({ params }: { params: { id: string } }) {
  // getting all the channels from Supabase
  const { data: channels } = await supabase.from("channels").select();

  // filtering the channels to get the current one
  const channel: Array<Channel> =
    channels?.filter((channel: Channel): boolean => channel.id === params.id) ||
    [];

  // getting the name of the current channel
  const name = channel[0]?.name || "channel-with-no-name";
  const id = channel[0]?.id || "";

  // getting all the messages in the current channel from Supabase
  const { data: messages } = await supabase
    .from("messages")
    .select()
    .eq("channel", id);

  return (
    <>
      <Header />
      <main className="p-6 pb-10">
        <Select channels={channels || []} current={params.id} />
        <h2 className="font-bold text-lg mb-4">#{name}</h2>
        <Conversation messages={messages || []} />
        <Compose current={id} />
      </main>
    </>
  );
}
