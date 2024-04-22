// // PROCEDURAL PROGRAMMING
// let baseSalary = 30000;
// const overtime = 10;
// const employees: { name: string; age: number }[] = [
//   { name: "Gosho", age: 19 },
//   { name: "Maria", age: 21 },
//   { name: "Svilen", age: 19 },
//   { name: "Kiril", age: 54 },
//   { name: "Gergana", age: 29 },
// ];
// function getWage(salary: number, overtimeInHr: number): number {
//   return salary + (salary / 120) * overtimeInHr;
// }
// const wage = getWage(baseSalary, overtime);
// console.log("wage ", wage);
// function getAvgAgeForTheCompany(employees: { name: string; age: number }[]) {
//   let sumAge = 0;
//   employees.forEach((e) => {
//     sumAge += e.age;
//   });
//   baseSalary = 0;
//   return sumAge / employees.length;
// }
// const avgAge = getAvgAgeForTheCompany(employees);
// console.log({ avgAge });
// // OOP like -> encapsulated
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   getWage: function () {
//     // Uncle bob -> function without parameters is the best!
//     return this.baseSalary + this.overtime;
//   },
// };
// employee.baseSalary = 40000;
// employee.overtime = 12;
// console.log(employee.getWage());
// // Encapsulation
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   getNameInCapitalLetters() {
//     return this.name.toUpperCase();
//   }
// }
// const p = new Person("Bobi");
// console.log(p.getNameInCapitalLetters());
// Abstraction
// class Car {
//   make: string;
//   model: string;
//   color: string;
//   constructor(make: string, model: string, color: string) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//   }
//   getDetails() {
//     return `This car is made in ${this.make} and it is model ${this.model} in ${this.color} color!`;
//   }
// }
// const bmwCar = new Car("Germany", "BMW", "red");
// console.log(bmwCar.getDetails());
// class Car {
//   private horsePowers: number;
//   private engine: string;
//   constructor(horsePowers: number, engine: string) {
//     this.engine = engine;
//     this.horsePowers = horsePowers;
//   }
//   private getCoeffForDiseal() {
//     return this.horsePowers * 1.5;
//   }
//   private getCoeffForGas() {
//     return this.horsePowers * 23;
//   }
//   public getCoeff() {
//     if (this.engine === "diesel") {
//       return this.getCoeffForDiseal();
//     }
//     return this.getCoeffForGas();
//   }
// }
// const car1 = new Car(133, "diesel");
// console.log(car1.getCoeff());
// // Inheritance
// class Mammal {
//   move() {
//     console.log("The Mammal is Moving!");
//   }
//   speak() {
//     console.log("The Mammal is Speaking!");
//   }
// }
// class Dog extends Mammal {
//   constructor() {
//     super();
//   }
//   move() {
//     console.log("The Dog is moving");
//   }
// }
// class Cat extends Mammal {
//   constructor() {
//     super();
//   }
// }
// class Mouse extends Mammal {
//   constructor() {
//     super();
//   }
// }
// const d = new Dog();
// class MyHTMLElement {
//   click() {
//     console.log("click");
//   }
//   focus() {
//     console.log("focus");
//   }
// }
// class SelectBox extends MyHTMLElement {}
// const selectBox = new SelectBox();
// selectBox.click();
// class CheckBox extends MyHTMLElement {}
// const checkBox = new CheckBox();
// checkBox.focus();
// // Polymorphism
// interface Animal {
//   move: () => void;
// }
// class Lion implements Animal {
//   move() {
//     console.log("Moving by walking on the ground!");
//   }
// }
// class Bird implements Animal {
//   move() {
//     console.log("Moving by flying in the sky!");
//   }
// }
// class Fish implements Animal {
//   move() {
//     console.log("Moving by swimming in the ocean!");
//   }
// }
// const lion = new Lion();
// const fish = new Fish();
// const bird = new Bird();
// lion.move();
// fish.move();
// bird.move();
// function renderText() {
//   console.log("renderText called!");
// }
// function renderCheckbox() {
//   console.log("renderCheckbox called!");
// }
// function renderSelect() {
//   console.log("renderSelect called!");
// }
// function getRenderer(elementName: string) {
//   switch (elementName) {
//     case "text":
//       return renderText();
//     case "checkbox":
//       return renderCheckbox();
//     case "select":
//       return renderSelect();
//     default:
//       break;
//   }
// }
// getRenderer("select");
// interface MyHTMLElement {
//   render: () => void;
// }
// class TextBox implements MyHTMLElement {
//   render() {
//     console.log("Textbox render!");
//   }
// }
// class Select implements MyHTMLElement {
//   render() {
//     console.log("Select render!");
//   }
// }
/** SOLID  */
// Single responsibility
// class Stundent {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   constructor() {}
//   sendEmail() {
//     // sends an email
//   }
//   enrol() {
//     // to enrol student in a course
//   }
//   saveInDb() {
//     // save the current student record in the DataBase
//   }
// }
// class EmailService {
//   // email functionality
// }
// class Student {
//   // details for the student: id, marks, names etc
// }
// class EnrollmentService {
//   // enrollment functionlity
// }
// Repository Pattern
// class StudentRepository {
//   // CRUD => Create, Read, Update, Delete
//   // communication with DB
//   //   create() {
//   //     // logic
//   //     // valid
//   //     // db.insert()
//   //   }
// }
// Open-Closed Principle
// class Car {
//   protected color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   getMsgWithColor(): void {
//     console.log("This car is in color: " + this.color);
//   }
// }
// class VW extends Car {
//   private serialNumber: string;
//   constructor(color: string, serialNumber: string) {
//     super(color);
//     this.serialNumber = serialNumber;
//   }
//   getSNDetails() {
//     console.log(this.color + " - " + this.serialNumber);
//   }
// }
// const myVW = new VW("red", "j2h3g4jh32gjh4");
// myVW.getMsgWithColor();
// Interface seggregation
// interface Company {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
// interface Geo {
//   lat: string;
//   lng: string;
// }
// interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }
// interface UserFromDB {
//   address: Address;
//   company: Company;
//   details: UserDetails;
// }
// interface UserDetails {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone?: string;
//   website?: string;
// }
// class PersonUser implements UserDetails {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// Dependency Inversion (Principle) -> Dependency Injection (Pattern)
class Wallet {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
}
class Course {
    courses;
    constructor(courses) {
        this.courses = courses;
    }
}
//  BAD PRACTICE!
// class User {
//   wallet: Wallet;
//   username: string;
//   course: Course;
//   //   DON'T DO THAT -> BAD PRACTICE
//   constructor(username: string, balance: number, courses: string[]) {
//     this.username = username;
//     this.wallet = new Wallet(balance);
//     this.course = new Course(courses);
//   }
// }
// const userPesho = new User("pesho123", 3000, ["JS", "Python"]);
// console.log("balance: ", userPesho.username, userPesho.wallet.balance);
// console.log("courses", userPesho.course.courses);
// console.log("----------------------");
// const userMaria = new User("maria123", 4000, ["NodeJS", "SQL", "C++"]);
// console.log("balance: ", userMaria.username, userMaria.wallet.balance);
// console.log("courses", userMaria.course.courses);
// // GOOD PRACTICE
// class User {
//   wallet: Wallet;
//   username: string;
//   course: Course;
//   // INJECTED!
//   constructor(username: string, wallet: Wallet, course: Course) {
//     this.username = username;
//     this.wallet = wallet;
//     this.course = course;
//   }
// }
// const walletIvan = new Wallet(4000);
// const coursesIvan = new Course(["C#", "JS"]);
// const userIvan = new User("ivan123", walletIvan, coursesIvan);
// console.log("balance: ", userIvan.username, userIvan.wallet.balance);
// console.log("courses", userIvan.course.courses);
// // Static member
// class Car {
//   static countOfFunctionInvoked: number = 0;
//   move() {
//     Car.countOfFunctionInvoked++;
//   }
// }
// const myCar1 = new Car();
// const myCar2 = new Car();
// console.log("count", Car.countOfFunctionInvoked);
// myCar1.move();
// myCar1.move();
// myCar1.move();
// console.log("count", Car.countOfFunctionInvoked);
// myCar2.move();
// myCar2.move();
// console.log("count", Car.countOfFunctionInvoked);
// Getters and setters
// class Person {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name(): string {
//     // logic
//     return this._name.toLowerCase();
//   }
//   set name(newName: string) {
//     if (newName.length <= 3) {
//       throw new Error("New name is less than 4 chars!");
//     }
//     this._name = newName;
//   }
// }
// const p = new Person("Pesho");
// p.name = "Poppy";
// console.log(p.name);
// // Access modifiers
// class Creature {
//   private name: string;
//   public age: number;
//   protected color: string;
//   constructor(name: string, age: number, color: string) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//   }
// }
// class AnotherCreature extends Creature {
//   readonly id = 123;
//   constructor(name: string, age: number, color: string) {
//     super(name, age, color); // new Creature
//   }
//   getColor() {
//     return this.color;
//   }
// }
// const creature = new Creature("create A", 1230, "grey");
// const anotherCreature = new AnotherCreature("Another Creature", 2500, "black");
// Abstract class
class Color {
    hash;
    constructor(hash) { }
    fetchColorFromAPi() {
        console.log("fetch!");
    }
}
class Shape extends Color {
}
const s = new Shape("kajshdkjash");
s.fetchColorFromAPi();
