// interface User {
//   githubToken: string;
// }
// interface Admin extends User {
//   specialRights: boolean;
//   // githubToken: string;
// }
// const user: Admin = { specialRights: true, githubToken: "kasjhdkashkdjsah" };
// type Admin2 = {
//   specialRights: boolean;
//   githubToken: string;
// };
// class Person implements Admin2 {
//   specialRights = true;
//   githubToken = "kasjhdkashkdjsah";
// }
// interface PersonDetails {
//   firstName: string;
//   address: string;
//   age: number;
// }
// class Person implements PersonDetails {
//   firstName = "";
//   address = "";
//   age = 0;
// }
// const person: PersonDetails = {
//   firstName: "",
//   address: "",
//   age: 0,
// };
// interface A {
//   a: number;
// }
// interface B extends A {
//   b: number;
// }
// // a, b
// type C = {
//   c: number;
// };
// type D = {
//   d: number;
// } & C;
// // c, d
// Delcaration merging
// interface Animal {
//   name: string;
// }
// interface Animal {
//   speak: () => void;
// }
// const animal: Animal = {
//   name: "Gosho",
//   speak: () => {
//     console.log("mewww");
//   },
// };
// interface GetNameFunction {
//   (param1: number, param2: string): string;
// }
// const getName: GetNameFunction = (param1: number, param2: string) => {
//   return `${param1} ${param2}`;
// };
