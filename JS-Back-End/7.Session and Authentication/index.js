const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("./lib/jwt");

const app = express();
// const session = {};
const secret = "alabalasecretstochadura";

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const users = {};

app.get("/", (req, res) => {
  res.send("Hello");
});

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

  if (isValid) {
    try {
      const payload = { username };
      const token = await jwt.sign(payload, secret, { expiresIn: "2d" });

      res.cookie("token", token);
      res.redirect("profile");
    } catch (err) {
      console.log(err);
      res.redirect("/404");
    }
  }
});

app.get("/profile", async (req, res) => {
  const token = req.cookies["token"];
  if (token) {
    try {
      const payload = await jwt.verify(token, secret);
      res.send(`Profile: ${payload.username}`);
    } catch (err) {
      res.status(401).send("Unauthorized1");
    }
  }
  return res.redirect("/login");
});
app.listen(5000, () => console.log("Server is listening port 5000..."));
