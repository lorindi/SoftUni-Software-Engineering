const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.register = async (userData) => {
  const user = await User.create(userData);
  const result = getAuthResult(user);
  return result;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid username or password");
  }
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid username or password");
  }
  const result = getAuthResult(user);
  return result;
};
function getAuthResult(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, "SECRETSECRET", { expiresIn: "2d" });
  const result = {
    _id: user._id,
    email: user.email,
    accessToken: token,
  };
  return result;
}
