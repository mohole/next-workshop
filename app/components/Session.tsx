"use client";

import supabase from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Session = (): React.ReactElement => {
  const router = useRouter();

  // get the user from Supabase
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("--user", user);

    // if there is no user, redirect to the homepage
    if (!user) {
      router.push("/");
    }
  };

  // run the getUser function on mount
  useEffect(() => {
    getUser();
  }, []);

  // no need to render anything
  return <></>;
};
