const fs = require("fs");

const writeStream = fs.createWriteStream("./output.txt", { encoding: "utf8" });

writeStream.write("Chunk 1");
writeStream.write("Chunk 2");
writeStream.write("Chunk 3");
writeStream.write("Chunk 4");
writeStream.end();
