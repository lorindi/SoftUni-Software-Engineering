// 1
// function task(firstNum: number, secondNum: number): void {
//   console.log(firstNum * secondNum);
// }
// task(5, 7);

//2
// function task(...numbers: number[]): void {
//   console.log(`The largest number is ${Math.max(...numbers)}`);
// }
// task(5, -3, 16);
// task(-3, -5, -22.5);

//3
// function task(a: string, b: string): void {
//   let result: number = 0;
//   let start: number = Number(a)
//   let end: number= Number(b)
//   for (let i = start; i <= end; i++) {
//     result += i;
//   }
//   console.log(result);
// }
// task("1", "5");
// task("-8", "20");

//4
// function task(str: string): void {
//   const dayOfTheWeek: object = {
//     Monday: 1,
//     Tuesday: 2,
//     Wednesday: 3,
//     Thursday: 4,
//     Friday: 5,
//     Saturday: 6,
//     Sunday: 7,
//   };
//   if (dayOfTheWeek.hasOwnProperty(str)) {
//     console.log(dayOfTheWeek[str]);
//   } else {
//     console.log("error");
//   }
// }
// task("Monday");
// task('Friday');
// task('Invalid');

//5
// function task(firstNum: number, secondNum: number, operation: string): void {
//   const operations: object = {
//     "+": () => {
//       return firstNum + secondNum;
//     },
//     "-": () => {
//       return firstNum - secondNum;
//     },
//     "*": () => {
//       return firstNum * secondNum;
//     },
//     "/": () => {
//       return firstNum / secondNum;
//     },
//     "%": () => {
//       return firstNum % secondNum;
//     },
//     "**": () => {
//       return firstNum ** secondNum;
//     },
//   };

//   console.log(operations[operation]());
// }
// task(5, 6, "+");

//6
// function task(list: string[]): void {
//   let str: string[]= list.filter((value, index) => index % 2 === 0);
//   console.log(str);
// }
// task(["20", "30", "40", "50", "60"]);

//7
// function task(list: number[]): void {
//   const numbersLength = Math.ceil(list.length / 2)
//   let numbers: number[] = list.sort().slice(numbersLength);
//   console.log(numbers);
// }
// task([4, 7, 2, 5]);

//8
// function task(list: string[]): void {
//   list.forEach((el) => {
//     const [name, age] = el.split(" ");
//     console.log(`${name}, age ${age} says Meow`);
//   });
// }
// task(["Mellow 2", "Tom 5"]);

//9
// function task(list: string[]): void {
//   list.forEach((el) => {

//     console.log(`Name: ${el} -- Personal Number: ${el.length}`);
//   });
// }
// task([
//   'Silas Butler',
//   'Adnaan Buckley',
//   'Juan Peterson',
//   'Brendan Villarreal'
//   ]);

//10
// function task(list: number[]): void {
//   console.log(list.reduce((sum, number) => sum + number, 0));
//   console.log(list.reduce((sum, number) => sum + 1 / number, 0));
//   console.log(list.join(""));
// }
// task([1, 2, 3]);
