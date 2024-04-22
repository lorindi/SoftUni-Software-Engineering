// const getParamInfoNumber = (param: number): string => {
//   return `This is your param: ${param} and it is typeof ${typeof param}.`;
// };

// const getParamInfoStr = (param: string): string => {
//   return `This is your param: ${param} and it is typeof ${typeof param}.`;
// };

// const getParamInfoObj = (param: object): string => {
//   return `This is your param: ${param} and it is typeof ${typeof param}.`;
// };

// const getParamInfo = (param: number | string | object): string => {
//   return `This is your param: ${param} and it is typeof ${typeof param}.`;
// };

// function expression
// const getParamInfo = <T>(param: T): string => {
//   return `This is your param: ${param} and it is typeof ${typeof param}.`;
// };
// const getParamInfo = function <T>(param: T): string {
//   return `This is your param: ${param} and it is typeof ${typeof param}.`;
// };

// // Function declaration
// function getParamInfo<T>(param: T): string {
//   return `This is your param: ${param} and it is typeof ${typeof param}.`;
// }

// const paramNumber = getParamInfo(123);
// console.log(paramNumber);

// const paramStr = getParamInfo("xyz123");
// console.log(paramStr);

// const paramObj = getParamInfo({ name: "Pesho", age: 123 });
// console.log(paramObj);

// const paramBool = getParamInfo(true);
// console.log(paramBool);

// interface UserData<T> {
//   name: string;
//   age: number;
//   id: T;
// }

// const test = getParamInfo<UserData<number>>({
//   name: "Pesho",
//   age: 25,
//   id: 1,
// });

// const test2 = getParamInfo<UserData<string>>({
//   name: "Pesho",
//   age: 25,
//   id: "xyz",
// });

// const attachId = <T>(obj: T) => {
//   const id = Math.round(Math.random() * 1000);
//   return { ...obj, id };
// };

// type PersonType = {
//   name: string;
//   address: string;
//   age: number;
// };

// const person: PersonType = {
//   name: "Mitko",
//   address: "Sofia, Bulgaria",
//   age: 23,
// };

// const personWithId = attachId<PersonType>(person);
// console.log(personWithId);

// type AnimalType = {
//   furColor: string;
//   legsCount: number;
//   type: string;
// };

// const animal: AnimalType = {
//   furColor: "green",
//   legsCount: 4,
//   type: "mammal",
// };

// const animalWithId = attachId<AnimalType>(animal);
// console.log(animalWithId);

// interface DocumentObject<T> {
//   id: number;
//   name: string;
//   data: T;
// }

// type SomeType = { name: string; age: number; address: string };

// const doc1: DocumentObject<SomeType> = {
//   id: 1,
//   name: "person",
//   data: {
//     name: "Pesho",
//     age: 12,
//     address: "Tokyo, Japan",
//   },
// };

// const doc2: DocumentObject<boolean> = {
//   id: 2,
//   name: "something",
//   data: true,
// };

// const doc3: DocumentObject<string[]> = {
//   id: 3,
//   name: "some strings",
//   data: ["a", "b", "c"],
// };

// const takeLast = <T>(array: T[]): T => {
//   return array.pop();
// };

// const lastNum = takeLast<number>([1, 2, 3, 4, 5]);
// console.log(lastNum);
// const lastBool = takeLast<boolean>([true, false, false, true]);
// console.log(lastBool);
// const lastStr = takeLast<string>(["a", "b", "c", "d"]);
// console.log(lastStr);

// const randomObj = { a: "1", b: "2", c: "3" };
// const tuples = Object.entries(randomObj);
// console.log(tuples);

// const makeTuples = <T, V>(a: T, b: V): (T | V)[] => {
//   return [a, b];
// };

// const tuple1 = makeTuples("Hello", 123);
// const tuple2 = makeTuples(123, "ABC");
// const tuple3 = makeTuples(true, "Alphabet");
// console.log(tuple1);

// interface GenericConstructor<T, V> {
//   (arg1: T, arg2: V): [T, V];
// }

// const simpleFn: GenericConstructor<string, string> = <T, V>(
//   arg1: T,
//   arg2: V
// ) => {
//   return [arg1, arg2];
// };

// console.log(simpleFn("Hello", "World"));

// class Colletion<T> {
//   data: T[];

//   constructor(...params: T[]) {
//     this.data = params;
//   }

//   addElemnt(el: T) {
//     this.data.push(el);
//   }

//   removeElement(el: T) {
//     const index = this.data.indexOf(el);

//     if (index > -1) {
//       this.data.splice(index, 1);
//     }
//   }
// }

// const numCollection = new Colletion(1, 2, 3, 4);
// numCollection.addElemnt(55);
// numCollection.removeElement(2);
// console.log(numCollection.data);

// const strCollection = new Colletion("a", "b", "c", "d");
// strCollection.addElemnt("Pikachu");
// strCollection.removeElement("b");
// console.log(strCollection.data);

// class UserTest<F, S> {
//   first: F;
//   second: S;

//   constructor(f: F, s: S) {
//     this.first = f;
//     this.second = s;
//   }

//   showBoth() {
//     return `First: ${this.first}, Second: ${this.second}`;
//   }
// }

// const test1 = new UserTest(123, "Pokemon");
// console.log(test1.showBoth());

// const test2 = new UserTest(true, { name: "Kiril" });
// console.log(test2.showBoth());

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
