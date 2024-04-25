import { UserDetails } from "../type/user";
import { HttpService } from "./httpService";

export class UserService extends HttpService<UserDetails> {
  constructor(baseUrl: string) {
    super(`${baseUrl}/users`); //   new HttpService(`${baseUrl}/users`);
  }

  getSingleUser(id: number, cb: Function) {
    return this.getOne(id).then((data) => {
      cb(data.id);
    });
  }
}
