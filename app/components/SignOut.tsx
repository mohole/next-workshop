"use client";

import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export const SignOut = (): React.ReactElement => {
  const [loggedUser, setLoggedUser] = useState<any>();
  const router = useRouter()

  const doSignOut = async () => {
    setLoggedUser(null);
    const { error } = await supabase.auth.signOut();
    !error && router.push('/')
  };

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setLoggedUser(user?.user_metadata);
  };

  useEffect(() => {
    getUser();
  }, []);

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
