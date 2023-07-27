import { useEffect, useState } from "react";
import supabase from "./supabase";

type LoggedUser = {
  name: string;
  full_name: string;
  avatar_url: string;
};

export const useLoggedUser = (): LoggedUser => {
  const [loggedUser, setLoggedUser] = useState<any>(null);

  // retrieve logged in user (meta)data
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setLoggedUser(user?.user_metadata);
  };

  // run the function only on component first mount
  useEffect(() => {
    getUser();
  });

  return loggedUser;
};
