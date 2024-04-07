const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], minLength: 3, maxLength: 20 },
  color: {type:String, require: false,
  enum:{
    values: ['White','Black','Yellow'],
    message: 'Wrong color',
  }},
  age: Number,
  breed: String,
});
// catSchema.method('greet', function(){})
catSchema.method.greet = function () {
  console.log(`Hello I"m cat - my name is ${this.name}`);
};
catSchema.virtual("info").get(function () {
  return `My name is ${this.name} and I'm ${this.age} years old.`;
});
catSchema.static("giveMeCats", function () {
  return this.find();
});
const Cat = mongoose.model("Cat", catSchema);
module.exports = Cat;
// 2:17
