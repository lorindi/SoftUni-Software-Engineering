const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

const app = express();
const session = {}; // Define session object to store user sessions

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  let id;
  const userId = req.cookies["userId"];
  if (userId && session[userId]) {
    id = userId;
  } else {
    id = uuid();
    session[id] = {}; // Create a session object for the new user
    res.cookie("userId", id, { httpOnly: true });
  }

  res.send(`Hello User - ${id}`);
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
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  // Here you might want to check the username and password against your database
  // and handle the login process accordingly
  res.send(hash);
});

app.listen(5000, () => console.log("Server is listening port 5000..."));
