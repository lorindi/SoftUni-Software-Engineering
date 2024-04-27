import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[];

  constructor(buttonCapacity: number) {
      this.buttonCapacity = buttonCapacity;
      this.drinks = [];
  }

  addDrink(drink: Drink) {
      if (this.drinks.length < this.buttonCapacity) {
          this.drinks.push(drink);
          
      }
  }

  removeDrink(name: string): boolean {
      const index = this.drinks.findIndex(drink => drink.name === name);
      if (index !== -1) {
          this.drinks.splice(index, 1);
          return true;
      }
      return false;
  }

  getLongest(): string {
      const longestDrink = this.drinks.reduce((prev, curr) => {
          return prev.volume > curr.volume ? prev : curr;
      });
      return longestDrink.toString();
  }

  getCheapest(): string {
      const cheapestDrink = this.drinks.reduce((prev, curr) => {
          return prev.price < curr.price ? prev : curr;
      });
      return cheapestDrink.toString();
  }

  buyDrink(name: string): string {
      const drink = this.drinks.find(drink => drink.name === name);
      if (drink) {
          return drink.toString();
      } else {
          return "Drink not found!";
      }
  }

  getCount(): number {
      return this.drinks.length;
  }

  report(): string {
      const drinkList = this.drinks.map(drink => drink.toString()).join('\n');
      return `Drinks available:\n${drinkList}`;
  }
}