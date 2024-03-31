const { log } = require("console");
const fs = require("fs");
const readStream = fs.createReadStream("./input.txt", {
  highWaterMark: 10000,
  encoding: "utf-8",
});
readStream.on("data", (chunk) => {
  log("Read Chunk");
  log(chunk);
  // console.log('Read Chunk');
  // console.log(chunk);
});
readStream.on('end', () => {
    log('Reading data is finished')
})
