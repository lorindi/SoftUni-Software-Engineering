const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();
const readStream = fs.createReadStream("./input.txt");
const writeStream = fs.createWriteStream("./output.txt");

readStream.pipe(gzip).pipe(writeStream);
