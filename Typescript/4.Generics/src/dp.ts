// Singleton Pattern - Anti pattern
// class Singleton {
//   private static instance: Singleton | null = null;

//   private constructor() {}

//   public static getInstance(): Singleton {
//     if (this.instance === null) {
//       this.instance = new Singleton();
//     }

//     return this.instance;
//   }
// }

// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();
// const a = { name: "Pesho" };
// const b = { name: "Pesho" };
// console.log(instance1 === instance2);

// Factory Pattern
// interface Car {
//   model: string;
//   drive: () => void;
// }

// class Tesla implements Car {
//   model = "Tesla";
//   drive() {
//     console.log(`You are drving ${this.model}!`);
//   }
// }

// class BMW implements Car {
//   model = "BMW";
//   drive() {
//     console.log(`You are drving ${this.model}!`);
//   }
// }

// class CarFactory {
//   createCar(type: string): Car {
//     if (type === "Tesla") {
//       return new Tesla();
//     } else if (type === "BMW") {
//       return new BMW();
//     } else {
//       throw new Error("Car type not supported!");
//     }
//   }
// }

// const carFactory = new CarFactory();
// const myTesla = carFactory.createCar("Tesla");
// myTesla.drive();

// const myBMW = carFactory.createCar("BMW");
// myBMW.drive();

// const myVW = carFactory.createCar("VW");
// myVW.drive();

// // Strategy Pattern
// interface DeliveryStrategy {
//   calcCost(weight: number, distance: number): number;
// }

// class EcontStrategy implements DeliveryStrategy {
//   calcCost(weight: number, distance: number): number {
//     // custom logic for econt
//     return (weight * distance) / 100;
//   }
// }
// class SpeedyStrategy implements DeliveryStrategy {
//   calcCost(weight: number, distance: number): number {
//     // custom logic for speedy
//     return weight * distance - 100;
//   }
// }
// class FedExStrategy implements DeliveryStrategy {
//   calcCost(weight: number, distance: number): number {
//     // custom logic for fedex
//     return weight * distance * distance;
//   }
// }

// class DeliveryCalcCost {
//   private deliveryStrategy: DeliveryStrategy;

//   constructor(deliveryStrategy: DeliveryStrategy) {
//     this.deliveryStrategy = deliveryStrategy;
//   }

//   calculateCost(weight: number, distance: number): number {
//     return this.deliveryStrategy.calcCost(weight, distance);
//   }
// }

// const econtDelivery = new EcontStrategy();
// const speedyDelivery = new SpeedyStrategy();
// const fedexDelivery = new FedExStrategy();

// // econt
// const calcEcont = new DeliveryCalcCost(econtDelivery);
// const costEcont = calcEcont.calculateCost(10, 100);
// // speed
// const calcSpeedy = new DeliveryCalcCost(speedyDelivery);
// const costSpeedy = calcSpeedy.calculateCost(10, 100);
// // fedex
// const calcFedex = new DeliveryCalcCost(fedexDelivery);
// const costFedex = calcFedex.calculateCost(10, 100);

// console.log({
//   costEcont,
//   costSpeedy,
//   costFedex,
// });

// Adapter pattern

interface APIType {
  data: { name: string; age: number; social: { email: string } };
}

class API {
  fetchData(): APIType {
    return {
      data: {
        name: "Johnny",
        age: 25,
        social: {
          email: "johnny25@gmail.com",
        },
      },
    };
  }
}

interface JustifiedData {
  name: string;
  age: number;
  email: string;
}

class Converter implements JustifiedData {
  private apiData: API;

  constructor(apiData: API) {
    this.apiData = apiData;
  }

  get name(): string {
    return this.apiData.fetchData().data.name;
  }

  get age(): number {
    return this.apiData.fetchData().data.age;
  }

  get email(): string {
    return this.apiData.fetchData().data.social.email;
  }
}

// Client
function displayData({ name, age, email }: JustifiedData) {
  console.log({ name, age, email });
}

const api = new API();
const adaptedData = new Converter(api);
displayData(adaptedData);
