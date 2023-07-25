
export type Channel = {
  id: string;
  name: string;
  created_at: string;
};

export type User = {
  name: string, 
  photo?: string,
}

export type Message = {
  user: User,
  text: string,
  created_at: string,
  channel: string
}