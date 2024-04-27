import { VendingMachine } from "./VendingMachine";
import { Drink } from "./Drink";

function main() {
  //Initialize the repository (VendingMachine)
  const vendingMachine = new VendingMachine(6);

  //Initialize Entity (Drink)
  const tea = new Drink("Tea", 1.5, 300);
  const coffee = new Drink("Coffee", 2.0, 120);
  const hotChocolate = new Drink("Hot Chocolate", 2.5, 200);
  const latte = new Drink("Latte", 3.5, 220);
  const cappuccino = new Drink("Cappuccino", 2.8, 180);
  const mocha = new Drink("Mocha", 2.1, 150);
  const herbalTea = new Drink("Herbal Tea", 1.75, 300);

  //Get Count
  console.log(vendingMachine.getCount());
  //0

  //Add Drinks
  vendingMachine.addDrink(tea);
  vendingMachine.addDrink(coffee);
  vendingMachine.addDrink(hotChocolate);
  vendingMachine.addDrink(latte);
  vendingMachine.addDrink(cappuccino);
  vendingMachine.addDrink(mocha);

  //Try to add drinks when the capacity is full
  vendingMachine.addDrink(herbalTea);

  //Get Count
  console.log(vendingMachine.getCount());
  //6

  //Remove Drink
  console.log(vendingMachine.removeDrink("Herbal Tea"));
  //false
  console.log(vendingMachine.removeDrink("Tea"));
  //true

  //Get Longest Drink
  console.log(vendingMachine.getLongest());
  //Name: Latte, Price: $3.5, Volume: 220 ml

  //Get Cheapest Drink
  console.log(vendingMachine.getCheapest());
  //Name: Coffee, Price: $2.0, Volume: 120 ml

  //Buy a specific Drink
  console.log(vendingMachine.buyDrink("Cappuccino"));
  //Name: Cappuccino, Price: $2.8, Volume: 180 ml

  //Drinks Report
  console.log(vendingMachine.report());
  //Drinks available:
  //Name: Coffee, Price: $2.0, Volume: 120 ml
  //Name: Hot Chocolate, Price: $2.5, Volume: 200 ml
  //Name: Latte, Price: $3.5, Volume: 220 ml
  //Name: Cappuccino, Price: $2.8, Volume: 180 ml
  //Name: Mocha, Price: $2.1, Volume: 150 ml
}
main();
