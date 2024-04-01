const fs = require("fs/promises");

fs.readFile("./input.txt", "utf-8")
  .then((data) => {
    return fs.writeFile("./output.txt", data, "utf-8");
  })
  .then(() => {
    console.log("Filesaved");
  });
