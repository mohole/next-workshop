import OpenAI from "openai";
import { Header } from "@/components/Header";
import { Conversation } from "@/components/Conversation";
import { Message } from "@/utils/types";

const prompt = "dimmi se sei pronto";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices;
}

const Home = async () => {
  //const msgs = await main();
  const msgs: any[] = [];

  const messages: Message[] = [{
    isOwner: true,
    text: prompt
  }]

  return (
    <>
      <Header />
      <main className="p-6 pb-10">
        <Conversation initialMessages={[]} />
      </main>
    </>
  );
};

export default Home;
