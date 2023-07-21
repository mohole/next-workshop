"use client";

import supabase from "@/utils/supabase";

export const SignOut = (): React.ReactElement => {
  const doSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.log("--data", error);
  };

  return (
    <button onClick={doSignOut}>
      Logout
    </button>
  );
};
