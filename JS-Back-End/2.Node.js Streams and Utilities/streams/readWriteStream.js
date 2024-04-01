const fs = require("fs");
const path = require("path");

const readStream = fs.createReadStream(path.resolve(__dirname, "./input.txt"));
const writeStream = fs.createWriteStream(
  path.resolve(__dirname, "./output.txt")
);

// Всеки път, когато има данни за четене, аз искам тези данни да ги записвам в write steam
readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

// Затваряне на stream
readStream.on("end", () => {
  writeStream.end();
});
