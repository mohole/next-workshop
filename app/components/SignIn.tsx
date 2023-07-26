"use client";

import supabase from "@/utils/supabase";

export const SignIn = (): React.ReactElement => {
  // start the Github signin flow
  const doSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    error && console.error(error);
  };

  return (
    <button onClick={doSignIn} className="btn btn-accent w-full">
      Sign in with Github
    </button>
  );
};
