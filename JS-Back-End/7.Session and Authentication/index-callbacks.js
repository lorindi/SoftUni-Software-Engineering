const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
// const session = {};
const secret = "alabalasecretstochadura";

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const users = {};

app.get("/", (req, res) => {
  //   console.log(users);
  //   const payloads = { _id: uuid(), username: "Lora" };
  //   const option = { expiresIn: "2d" };
  //   const secret = "MySuperPrivateSecret";
  //   const token = jwt.sign(payloads, secret, option);
  //   //   https://jwt.io/
  //   res.send(token);

  res.send("Hello");
});

// app.get("/verify/:token", (req, res) => {
//   const token = req.params.token;
//   const payload = jwt.verify(token, "MySuperPrivateSecret");
//   console.log(payload);
//   res.send("ok");
// });

app.get("/register", (req, res) => {
  res.send(`
      <form method="POST">
          <label for="username">Username</label>
          <input type="text" name="username"/>
          <label for="password">Password</label>
          <input type="password" name="password"/>
          <input type="submit" value="Register"/>
      </form>
      `);
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  users[username] = {
    password: hash,
  };
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.send(`
    <form method="POST">
        <label for="username">Username</label>
        <input type="text" name="username"/>
        <label for="password">Password</label>
        <input type="password" name="password"/>
        <input type="submit" value="Login"/>
    </form>
    `);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const hash = users[username]?.password;
  const isValid = await bcrypt.compare(password, hash);
  //   if (isValid) {
  //     res.send("Successfully logged in");
  //   } else {
  //     res.send("Unauthorized");
  //   }
  if (isValid) {
    //generate jwt token
    const payload = { username };
    jwt.sign(payload, secret, { expiresIn: "2d" }, (err, token) => {
      if (err) {
        return res.redirect("/404");
      }
      //ser jwt token as cookie
      res.cookie("token", token);
      res.redirect("profile");
    });
  } else {
    res.status(401).send("Unauthorized");
  }
});
app.get("/profile", (req, res) => {
  //get token from cookie
  const token = req.cookies["token"];
  if (token) {
    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        return res.status(401).send("Unauthorized1");
      }
      return res.send(`Profile: ${payload.username}`);
    });
  }
  return res.redirect('/login');

  //verify token

  //allow request if calid
});
app.listen(5000, () => console.log("Server is listening port 5000..."));
