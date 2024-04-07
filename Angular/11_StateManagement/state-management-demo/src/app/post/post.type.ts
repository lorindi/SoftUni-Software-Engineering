export interface PostState {
  post: Post;
}

export interface Post {
  likes?: number;
  text?: string;
}
