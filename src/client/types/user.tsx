export type User = {
  _id: string;
  username: string;
  favorites: number[];
  role: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
  following: string[];
  __v: number;
};
