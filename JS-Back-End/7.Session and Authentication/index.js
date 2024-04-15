express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const { v4: uuid } = require("uuid");

const app = express();
const session = {};

app.use(cookieParser());
app.use(
  expressSession({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  let id;
  const userId = req.cookies["userId"];
  if (userId && session[userId]) {
    id = userId;
    // console.log("User secret: ", session[userId].secret);
    console.log(req.session.secret);
  } else {
    id = uuid();
    // session[id] = {
    //   secret: "my secret",
    // };
    req.session.secret = ` ${id} - some secret`;
    res.cookie("userId", id);
  }

  res.send(`Hello User - ${id}`);
});

app.listen(5000, () => console.log("Server is listening port 5000..."));
