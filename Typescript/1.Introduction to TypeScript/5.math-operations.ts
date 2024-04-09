function matchOperations(
    firstNumber: number,
    secondNumber: number,
    sign: string
  ): void {
    const operations: { [key: string]: () => number } = {
      "+": () => {
        return firstNumber + secondNumber;
      },
      "-": () => {
        return firstNumber - secondNumber;
      },
      "*": () => {
        return firstNumber * secondNumber;
      },
      "/": () => {
        return firstNumber / secondNumber;
      },
      "%": () => {
        return firstNumber % secondNumber;
      },
      "**": () => {
        return firstNumber ** secondNumber;
      },
    };
  
    if (sign in operations) {
      console.log(operations[sign]());
    } else {
      console.log("Invalid operation");
    }
  }
  
  matchOperations(3, 5.5, '*');
  