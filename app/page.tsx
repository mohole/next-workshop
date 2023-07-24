"use client";

import supabase from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // get the the first channel from Supabase and redirect to it
  const getChannels = async (): Promise<void> => {
    const { data } = await supabase.from("channels").select();

    const first: string = (data && data[0].id) || "";
    router.push(`/channel/${first}`);
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <>
      <p className="py-10 text-center">loading data...</p>
    </>
  );
}
