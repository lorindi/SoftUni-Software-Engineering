"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./utils/string");
const person_1 = require("./utils/person");
const modalA = require("./modul-a");
console.log(modalA.a);
console.log(modalA.getSomeRandomString());
class Person {
    name;
    id;
    age;
    constructor(name, age) {
        this.id = (0, person_1.getRandomUniqueId)();
        this.name = (0, string_1.capitalizeFirstLetter)(name);
        this.age = age;
    }
}
const nikiPerson = new Person("niki", 21);
const petyaPerson = new Person("petya", 19);
const goshoPerson = new Person("gosho", 32);
// console.log(nikiPerson.name, " - ", nikiPerson.id);
// console.log(petyaPerson.name, " - ", petyaPerson.id);
// console.log(goshoPerson.name, " - ", goshoPerson.id);
const avgAge = (0, person_1.getAvgAge)([nikiPerson, petyaPerson, goshoPerson]);
// console.log({ avgAge });
