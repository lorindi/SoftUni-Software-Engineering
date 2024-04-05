function sumOfNumbers() {
  const [firstNumber, secondNumber]: number[] = ["1", "5"].map((e) =>
    Number(e)
  );

  let sum: number = 0;
  for (let i: number = firstNumber; i <= secondNumber; i++) {
    sum += i;
  }
  return sum

  
}
console.log(sumOfNumbers());
