// const b: number = 5;
// console.log(b);
// const greeting: string = "Hello!";
// console.log(greeting);

// Strings
// let str: string = "Hello";
// str = `Hello, ${123}`;
// str = true; // ivalid
// console.log(str);

// Numbers
// let a: number = 11;
// let floatingPoint: number = 5.5;
// let hex: number = 7e4;
// let binary: number = 1001101;
// console.log(a);

// Booleans
// let hasAuth: boolean = true;
// const isGreater: boolean = 5 > 7;
// const hasTwo = [1, 2, 3, 4].some((e) => e === 2);
// const isBool: boolean = 123;

// console.log(isBool);

// Symbols
// let sym1 = Symbol("key");
// let sym2 = Symbol("key");
// console.log(sym1 === sym2);

// Undefined
// let user: Object | undefined;
// let person: Object | null = null;

// console.log({ user });
// console.log({ person });

// setTimeout(() => {
//   user = { name: "user123" };
//   console.log({ user });

//   person = { name: "Mitko" };
//   console.log({ person });
// }, 3000);

// Arrays
// const arr1: number[] = [1, 2, 3, 4];
// const arr2: Array<number> = [2, 3, 4, 5];
// const arr3: string[] = ["Hello", " its ", " me!"];
// const arr4: boolean[] = [true, true, false, true];
// const arr5: any[] = [12, "Google", true, { name: "person123" }];
// console.log(arr5);

// Tuples      key    value
// let tuple1: [number, string] = [123, "Hi!"];
// let tuple2: [boolean, object] = [true, { name: "Mitko" }];
// let tupleObjKey: [string, object] = ["user", { name: "User123" }];
// console.log(tuple2);

// Enum
//   M = 11,
//   T = "Hello",
//   W = "x123",
//   Th = "chetvurtuk",
//   F = "petuk",
// enum DaysOfWorkWeek {
//   Monday = 1,
//   T,
//   W,
//   Th,
//   F,
// }

// const currentDay = 1;

// if (currentDay === DaysOfWorkWeek.Monday) {
//   console.log("Is Monday");
// }

// Any, Unknown -> "type safe"
// let a: unknown;
// a = 5;
// a = { name: "Pesho" };
// a = true;
// a = ["String"];
// console.log(a);

// Void
// function myPrint(input: string): void {
//   console.log(input);
// doesn't has return value!
// }

// function myPrint2(input: string): string {
//   return `[from print function]: ${input}`;
// }

// myPrint("Hello!");
// console.log(myPrint2("Hello!"));

// Optional params
// function optionalParams(param1?: number, param2?: string): void {
//   console.log({ param1, param2 });
// }
//  from left to right ->
// optionalParams(1);

// Default arguments
// function optionalParams2(param1 = 5, param2 = "Hi from default"): void {
//   console.log({ param1, param2 });
// }
//
//  from left to right ->
// optionalParams2(123, "hai!");

// Return types in Functions
// const getNum = (): number => 5;
// const getNum2 = (): string => {
//   return "hi!";
// };

// const getNum3 = function (): boolean {
//   return true;
// };

// function getNum4(): undefined {
//   return;
// }

// const getNum5: () => number = () => {
//   return 5;
// };

// Never
// let x = (): never => {
//   while (true) {}
// };
// console.log(x);

// Debugging
function test() {
    let arr: number[] = [1, 2, 3, 4, 5];
    arr.forEach((e) => {
      if (e === 2) {
        console.log("'e' is 2");
      }
      console.log(e);
    });
  }
  
  test();

// *tsc app.ts /tsc && node app.js 
// *npm install -g typescript (latest stable build)
// *tsc -v/ tsc --version => Should return a message 'Version'
// *tsc --init => This command will create a ne tsconfig.json file

// * ES6 -> ES5  => Transpile
// * TypeScript -> JavaScript => Transpile
// * TypeScript -> C++ => Compile