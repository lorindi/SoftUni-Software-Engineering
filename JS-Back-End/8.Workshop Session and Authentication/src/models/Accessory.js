const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});
const Accessory = mongoose.model("Accessory", accessorySchema);
module.exports = Accessory;
