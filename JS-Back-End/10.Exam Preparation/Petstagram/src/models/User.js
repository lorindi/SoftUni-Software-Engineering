const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    minLength: 2,

  },
  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: 4,

  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 10,

  },
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (this.password !== value) {
    throw new Error("Password missmatch!");
  }
});
userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});
const User = mongoose.model("User", userSchema);
module.exports = User;
