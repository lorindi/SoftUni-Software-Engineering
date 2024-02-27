function squareWithMaximumSum(input) {
  let [row, col] = input
    .shift()
    .split(", ")
    .map((num) => Number(num));
  let matrix = [];
  let sum = 0;
  for (let i = 0; i < row; i++) {
    let currentRow = input[i].split(", ").map((num) => Number(num));
    matrix.push(currentRow);
    sum += currentRow.reduce((acc, val) => acc + val, 0);
  }
  console.log(sum);
}

squareWithMaximumSum([
  "3, 6",
  "7, 1, 3, 3, 2, 1",
  "1, 3, 9, 8, 5, 6",
  "4, 6, 7, 9, 1, 0",
]);
