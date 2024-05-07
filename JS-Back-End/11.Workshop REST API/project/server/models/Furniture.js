const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  material: {
    type: String,
    require: true,
  },
  _ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Furniture = mongoose.model("Furniture", furnitureSchema);

module.exports = Furniture;
