const util = require("util");
const jwt = require("jsonwebtoken");
const jwtPromises = {
  sign: util.promisify(jwt.sign),
  verify: util.promisify(jwt.verify),
};
module.exports = jwtPromises;
