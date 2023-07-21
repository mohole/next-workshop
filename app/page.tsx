import { Header } from "@/components/Header";
import supabase from "@/utils/supabase";
import { SignIn } from "@/components/SignIn";


export default async function Home() {
  const { data, error } = await supabase.auth.getUser()

  console.log('--user', data, error)
  return (
    <>
      <Header />
      <main className="p-6 pb-10 bg-slate-50">
        <SignIn />
      </main>
    </>
  );
}
