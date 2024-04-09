// UNION TYPES
// let x: string | undefined;
// if (x?.length) {
//   console.log("Invoked code if is not undefined");
// }
// setTimeout(() => {
//   x = "Test";
//   console.log(x);
// }, 3000);
// const y: string | string[] = ["Test", "Test1", "Test123"];
// type Y2 = string | string[] | number | number[];
// const y2: Y2 = [123];
// let msg: string = "";
// msg = "Hello, I am message!";
// let person: object | null = null;
// setTimeout(() => {
//   person = { name: "Gosho", city: "Pernik" };
//   console.log(person);
// }, 1000);
// type Person = {
//   name: string;
//   city?: string;
//   age?: number;
// };
// function toResetData(param: number | Person): void {
//   if (typeof param === "number") {
//     person = null;
//   } else {
//     person = param;
//   }
// }
// const x1: object = []; // {} , []
// const x2: Object = true; // *
// toResetData({ name: "" });
// console.log(person);
// INTERSECTION TYPES
// type User = {
//   username: string;
//   email?: string;
//   createdAt?: number;
// };
// const user: User = {
//   username: "petko123",
//   email: "petko123@gmail.com",
//   createdAt: 123213123,
// };
// type Animal = {
//   furColor?: string;
//   legsNumber: number;
//   type: string;
// };
// const animal: Animal = { legsNumber: 4, type: "mammal", furColor: "yellow" };
// type AnimalUserType = Animal & User;
// type AnimalUserType = {
//   // Animal
//   furColor?: string;
//   legsNumber: number;
//   type: string;
//   // User
//   username: string;
//   email?: string;
//   createdAt?: number;
// };
// const animalUser: AnimalUserType = {
//   type: "fish",
//   legsNumber: 0,
//   username: "fishman123",
// };
// console.log(animalUser);
// type Bird = {
//   featherColor: string;
// };
// type Mammal = {
//   furColor: string;
// };
// type MammalOrBird = Mammal | Bird;
// const mammalOrBird: MammalOrBird = { featherColor: "golden" };
// console.log(mammalOrBird);
// Literal Types
// let apiCallStatus: "successful" | "failed";
// apiCallStatus = "successful";
// apiCallStatus = "failed";
// console.log(apiCallStatus);
// let errorStatus: 200 | 302;
// errorStatus = 200;
// console.log({ errorStatus });
// Type Aliases
// type Age = number | string;
// type Person = {
//   name: string;
//   age: Age;
// };
// const person: Person = { name: "mitko", age: 0 };
// const addPersonsAge = (age: Age) => {
//   person.age = age;
// };
// addPersonsAge("123");
// console.log(person);
// // "keyof"
// type Point = {
//   x: number;
//   y: number;
// };
// type PointKeyType = keyof Point;
// const point = { x: 1000, y: -300 };
// // ["123", "Text", "Thanks"].forEach((key: string) => {
// //     //  key => x | y
// //   console.log(point[key as keyof Point]);
// // });
// type Colors = { red: string; blue: string };
// type ColorsKey = keyof Colors;
// const color: Colors = { red: "cherven", blue: "sin" };
// Recursive Types
// type TreeNode1 = {
//   left: TreeNode1;
//   right: TreeNode1;
//   value: number;
// };
// interface TreeNode2 {
//   left: TreeNode2;
//   right: TreeNode2;
//   value: number;
// }
