"use client";

import supabase from "@/utils/supabase";
import { useLoggedUser } from "@/utils/getUser";
import { useRouter } from 'next/navigation'

export const SignOut = (): React.ReactElement => {
  const router = useRouter()
  const loggedUser = useLoggedUser();

  // signout the user and redirect the application to the root page
  const doSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    !error && router.push('/')
  };

  return (
    loggedUser ? <>
      <div className="avatar mr-2">
        <div className="w-10 rounded-full">
          <img src={loggedUser.avatar_url} alt={loggedUser.name} />
        </div>
      </div>
      <button className="btn btn-outline" onClick={doSignOut}>
        Logout
      </button>
    </> : <></>
  );
};
