express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  let id;

  const userId = req.cookies["userId"];
  if (userId) {
    id = userId;
  } else {
    id = uuid();
    res.cookie("userId", id);
  }

  res.send(`Hello User - ${id}`);
});

app.listen(5000, () => console.log("Server is listening port 5000..."));
