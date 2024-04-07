const mongoose = require("mongoose");
const Cat = require("./models/Cat");
const Person = require("./models/Person");
async function connectDb() {
  await mongoose.connect("mongodb://127.0.0.1:27017/catShelter");
  console.log("Db Connected successfully");

  //Create 1
  const newCat = new Cat({
    name: "Zuza",
    color: 'White',
    age: 10,
    breed: "Ulichan",
  });
  await newCat.save()

  //Create 2
  // const newCat = await Cat.create({
  //   name: "Carly",
  //   age: 2,
  //   breed: "Dog",
  // })

  //Read
  // const cats = await Cat.find({ breed: "Angora" });
  // .find => collection [{...}, {...}, {...}]. Find will return an array of two or more cats that match the requirements.
  // .findOne => one record {...}. Finds only the firs cat
  // .findById('id....') Returns the cat that matches this is.
  // console.log(cats);

  //Update
  // const carly = await Cat.findOne({ name: "Carly" });
  // carly.age = 10;
  // await carly.save();

  //Update method 2 native mongodb
  // await Cat.updateOne({ name: 'Carly' }, { $set: { age: 2 } });

  //Update method 3 native mongodb
  // await Cat.findByIdAndUpdate("661268422a13ca7a73074005", {
  //   $set: { breed: "Chihuahua" },
  // });

  //Delete 1
  // await Cat.deleteOne({ name: "Carl" });

  //Delete 2
  // await Cat.findByIdAndDelete("66127034cfb6dd0af5361e17");

  // cats.forEach((cat) => cat.greet()); //instance method
  // cats.forEach((cat) => console.log(cat.info)); //virtual property

  //Static Model method
  // const result = await Cat.giveMeCats();
  // console.log(result);

  //Creating collection by creating first record in non existant collection
  // await Person.create({
  //   name: "Ivan",
  //   age: 20,
  // })

  //Find all non angora cats
  // const cats = await Cat.find({breed: {$ne: "Angora"}})
  // console.log(cats);

  const cats = await Cat.find().where("breed").ne("Angora");
  console.log(cats);
}
connectDb();
