namespace AnimalGroup {
  export interface MammalType {
    legsCount: number;
    animalType: string;
    furColor?: string;
  }

  export class Mammal implements MammalType {
    legsCount = 4;
    animalType: string;
    furColor: string;

    constructor(type: string, furColor: string) {
      this.animalType = type;
      this.furColor = furColor;
    }

    getDetail() {
      return `This mammal is ${this.animalType} and it's fur is in ${this.furColor} color.`;
    }
  }
}

// const m1 = new Mammal("dog", "brown");
// console.log(m1.getDetail());
const m2 = new AnimalGroup.Mammal("dolphine", "none");
// console.log(m2.getDetail());

namespace People {
  export class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }
}

const p = new People.Person("Hristo");
// console.log(p.name);

namespace Shop {
  export namespace TechShop {
    export class Game {
      constructor() {}
    }
  }
}

const game = new Shop.TechShop.Game();

import shop = Shop.TechShop; // ALIAS
const g2 = new shop.Game();

// /// <reference path="student.ts" />
// const ivanchoStudent = new StudentGroup.Student([3, 6, 4, 5], "math");
// console.log(ivanchoStudent);
