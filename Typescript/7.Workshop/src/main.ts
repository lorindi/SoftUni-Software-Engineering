import { CONFIG } from "./constants";
import { PostService } from "./services/postService";
import { UserService } from "./services/userService";
import "./style.css";
import { HtmlUtil } from "./utils/html";

/** Handling the data */
const { baseUrl } = CONFIG;
const postService = new PostService(baseUrl);
const userId = 3;

/** Read All - Posts */
postService.getAll().then((data) => {
  console.log("posts ", data);
});

/** Read All - Users */
const userService = new UserService(baseUrl);
userService.getAll().then((data) => {
  console.log("users ", data);
});

/** Read One */
userService.getSingleUser(userId, (id: number) => {
  postService.getUserPosts(id).then((data) => {
    console.log("user's posts ", data[0]);
  });
});

// userService.getOne(userId).then((data) => {
//   console.log("single user", data);
// });

/** Delete */
// userService.delete(userId).then((x) => {
//   console.log("delete", x);
// });

// const user: UserDetails = {
//   id: 2,
//   name: "Pesho Ivanonv",
//   username: "Pesho",
//   email: "Pesho@april.biz",
//   address: {
//     street: "",
//     suite: "",
//     city: "",
//     zipcode: "",
//     geo: { lat: "", lng: "" },
//   },
//   phone: "0876123123123",
//   website: "peshoivanov.org",
//   company: {
//     name: "",
//     catchPhrase: "",
//     bs: "",
//   },
// };

/** Update */
// userService.update(user).then((x) => {
//   console.log("update", x);
// });

/** Create */
// userService.create(user).then((res) => {
//   console.log({ res });
// });

/** Rendering of the views */
const root = document.querySelector<HTMLDivElement>("#root");
HtmlUtil.render(root);
