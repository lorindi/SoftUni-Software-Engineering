import { capitalizeFirstLetter } from "./utils/string";
import { getAvgAge, getRandomUniqueId } from "./utils/person";
import { PersonType } from "./types/Person";
import { getSomeRandomString } from "./modul-a";

console.log(getSomeRandomString());

class Person implements PersonType {
  name: string;
  id: string;
  age: number;

  constructor(name: string, age: number) {
    this.id = getRandomUniqueId();
    this.name = capitalizeFirstLetter(name);
    this.age = age;
  }
}

const nikiPerson = new Person("niki", 21);
const petyaPerson = new Person("petya", 19);
const goshoPerson = new Person("gosho", 32);
// console.log(nikiPerson.name, " - ", nikiPerson.id);
// console.log(petyaPerson.name, " - ", petyaPerson.id);
// console.log(goshoPerson.name, " - ", goshoPerson.id);

const avgAge = getAvgAge([nikiPerson, petyaPerson, goshoPerson]);
// console.log({ avgAge });
