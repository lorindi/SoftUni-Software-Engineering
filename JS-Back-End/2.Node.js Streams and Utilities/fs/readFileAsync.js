const { log } = require("console");
const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (err, text) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(text);
});
log("end");
