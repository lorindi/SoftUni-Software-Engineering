const { log } = require("console");
const fs = require("fs");

const input = fs.readFileSync("./input.txt", {encoding: 'utf-8'});
log(input);
