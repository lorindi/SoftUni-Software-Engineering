export interface Theme {
  subscribers: string[];
  posts: string[];
  _id: string;
  themeName: string;
  userId: {
    themes: string[];
    posts: string[];
    _id: string;
    tel: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number;
  };
  created_at: string;
  updatedAt: string;
  __v: number;
}
