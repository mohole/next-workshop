"use client";

import supabase from "@/utils/supabase";

export const SignIn = (): React.ReactElement => {
  // start the Github signin flow
  const doSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    console.log("--data", data, error);
  };

  return (
    <button onClick={doSignIn} className="btn btn-accent w-full">
      Sign in with Github
    </button>
  );
};
