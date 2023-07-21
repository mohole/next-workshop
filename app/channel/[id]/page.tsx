import { Compose } from "@/components/Compose";
import { Conversation } from "@/components/Conversation";
import { Header } from "@/components/Header";

export default function Channel({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <main className="p-6 pb-10 bg-slate-50">
        <h2 className="font-bold text-lg mb-4">#{params.id}</h2>
        <Conversation />
        <Compose />
      </main>
    </>
  );
}
