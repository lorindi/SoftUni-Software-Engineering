const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
