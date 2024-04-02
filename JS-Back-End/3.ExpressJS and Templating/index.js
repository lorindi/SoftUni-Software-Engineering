const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from Express!");
});

//Web Action:(req, res) => {
//   res.send("This page contains cats :)");
// });

// http method + path + handler = Ednpoint

app.get("/cats", (req, res) => {
  res.send("This page contains cats :)");
});
app.listen(5000, () => console.log("Server is listening on port 5000..."));
