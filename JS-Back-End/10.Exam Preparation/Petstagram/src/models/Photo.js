const mongoose = require("mongoose");
const User = require("./User");

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [2, "Name should be at least 2 characters"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
    match: [/^https?:\/\//, "Invalid url"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: 1,
    max: 100,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    min: 5,
    max: 50,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    min: 5,
    max: 50,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
      },
      message: {
        type: String,
        required: [true, "Comment message is required"],
      },
    },
  ],
});
const Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;
