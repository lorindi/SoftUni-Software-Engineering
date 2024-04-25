// function calc(first: number, operator: string, second: number): string {
//   let result = null;

//   switch (operator) {
//     case "+":
//       result = (first + second).toFixed(2);
//       break;
//     case "-":
//       result = (first - second).toFixed(2);
//       break;
//     case "/":
//       result = (first / second).toFixed(2);
//       break;
//     case "*":
//       result = (first * second).toFixed(2);
//       break;
//     default:
//       result = "Non existing operator!";
//       break;
//   }

//   return result;
// }

type DictCalc = {
  [key: string]: string;
};

function calc(first: number, operator: string, second: number): string {
  const dictCalculator = {
    "+": (first + second).toFixed(2),
    "-": (first - second).toFixed(2),
    "/": (first / second).toFixed(2),
    "*": (first * second).toFixed(2),
  };

  if (!dictCalculator[operator]) {
    return "Non existing operator!";
  }

  return dictCalculator[operator];
}

// Input
// 5, "+", 10
// Output
// 15.00

// Input
// 25.5, "-", 3
// Output
// 23.5

const result = calc(25, "+", 10);
console.log(result);
