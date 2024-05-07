const express = require("express");
const cors = require("cors");

const router = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/furnitures")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// }); ||: npm i cors
app.use(cors());
app.use(auth);

app.get("/", (req, res) => {
  res.send("Restful service");
});
app.use(router);

app.listen(3030, () =>
  console.log("Restful server is listening on port 3030...")
);
