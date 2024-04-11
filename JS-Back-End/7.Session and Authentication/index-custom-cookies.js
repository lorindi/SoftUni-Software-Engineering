express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

app.get("/", (req, res) => {
  let id = uuid();

  const cookie = req.header("Cookie");
  if (cookie) {
    const [key, value] = cookie.split("=");
    id = value;
  } else {
    res.header("Set-Cookie", `userId=${id}`);
  }

  //   console.log(req.header("Cookie"));
  //   console.log(req.headers);
  res.send(`Hello User - ${id}`);
});

app.listen(5000, () => console.log("Server is listening port 5000..."));
