function cookingByNumbers(number, ...args) {
  number = Number(number);
  let operations = {
    chop: () => {
      number = number / 2;
      return number;
    },
    dice: () => {
      number = Math.sqrt(number);
      return number;
    },
    spice: () => {
      number = number + 1;
      return number;
    },
    bake: () => {
      number = number * 3;
      return number;
    },
    fillet: () => {
      number = number - number * 0.2;
      return number;
    },
  };
  while (args.length > 0) {
    let command = args.shift();
    number = operations[command]()
    console.log(number);
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
