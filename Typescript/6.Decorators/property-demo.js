// type Task = {
//   name: string;
//   level: "low" | "medium" | "hard";
// };
// class Employee {
//   @withMoreTasks
//   tasks: Task[] = [];
// }
// const employee1 = new Employee();
// console.log(employee1);
// const employee2 = new Employee();
// console.log(employee2);
// // Decorator scope
// function withMoreTasks<T, V extends Task[]>(
//   target: undefined,
//   context: ClassFieldDecoratorContext
// ) {
//   // Property scope
//   return function (fieldValue: V) {
//     // API call -> async
//     fieldValue.push({ name: "Do your homework!", level: "medium" });
//     fieldValue.push({ name: "Go to work!", level: "low" });
//     fieldValue.push({ name: "Go to the GYM!", level: "hard" });
//     return fieldValue;
//   };
// }
