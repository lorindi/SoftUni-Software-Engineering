"use strict";
var AnimalGroup;
(function (AnimalGroup) {
    class Mammal {
        legsCount = 4;
        animalType;
        furColor;
        constructor(type, furColor) {
            this.animalType = type;
            this.furColor = furColor;
        }
        getDetail() {
            return `This mammal is ${this.animalType} and it's fur is in ${this.furColor} color.`;
        }
    }
    AnimalGroup.Mammal = Mammal;
})(AnimalGroup || (AnimalGroup = {}));
// const m1 = new Mammal("dog", "brown");
// console.log(m1.getDetail());
const m2 = new AnimalGroup.Mammal("dolphine", "none");
// console.log(m2.getDetail());
var People;
(function (People) {
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    People.Person = Person;
})(People || (People = {}));
const p = new People.Person("Hristo");
// console.log(p.name);
var Shop;
(function (Shop) {
    let TechShop;
    (function (TechShop) {
        class Game {
            constructor() { }
        }
        TechShop.Game = Game;
    })(TechShop = Shop.TechShop || (Shop.TechShop = {}));
})(Shop || (Shop = {}));
const game = new Shop.TechShop.Game();
var shop = Shop.TechShop; // ALIAS
const g2 = new shop.Game();
// /// <reference path="student.ts" />
// const ivanchoStudent = new StudentGroup.Student([3, 6, 4, 5], "math");
// console.log(ivanchoStudent);
