import { Post } from "../type/post";
import { fetchUtil } from "../utils/http";
import { HttpService } from "./httpService";

export class PostService extends HttpService<Post> {
  constructor(baseUrl: string) {
    super(`${baseUrl}/posts`); //   new HttpService(`${baseUrl}/posts`);
  }

  getUserPosts(userId: number) {
    return fetchUtil<Post[]>(`${this.apiUrl}?userId=${userId}`) as Promise<
      Post[]
    >;
  }
}
