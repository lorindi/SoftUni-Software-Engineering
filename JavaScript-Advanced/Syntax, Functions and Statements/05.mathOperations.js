function mathOperations(firstNum, secondNum, operator) {
  if (operator === "+") {
    console.log(firstNum + secondNum);
  }
  else if (operator === "-") {
    console.log(firstNum - secondNum);
  }
  else if (operator === "*") {
    console.log(firstNum * secondNum);
  }
  else if (operator === "/") {
    console.log(firstNum / secondNum);
  }
  else if (operator === "%") {
    console.log(firstNum % secondNum);
  }
  else if (operator === "**") {
    console.log(firstNum ** secondNum);
  }
}
mathOperations(5, 6, "+");
