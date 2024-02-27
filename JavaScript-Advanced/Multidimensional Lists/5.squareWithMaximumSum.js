function squareWithMaximumSum(input) {
  let [row, col] = input
    .shift()
    .split(", ")
    .map((num) => Number(num));
  let matrix = [];
  for (let i = 0; i < row; i++) {
    let currentRow = input[i].split(", ").map((num) => Number(num));
    matrix.push(currentRow);
  }
  let maxSum = 0;
  let rP = 0;
  let cP = 0;

  for (let i = row - 1; i > 0; i--) {
    let currentSum = 0;
    for (let j = col - 1; j > 0; j--) {
      currentSum =
        matrix[i][j] +
        matrix[i - 1][j] +
        matrix[i - 1][j - 1] +
        matrix[i][j - 1];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        rP = i;
        cP = j;
      }
    }
  }
  result =
    matrix[rP][cP] +
    matrix[rP][cP - 1] +
    matrix[rP - 1][cP - 1] +
    matrix[rP - 1][cP];
  console.log(`${matrix[rP][cP]} ${matrix[rP - 1][cP]}`);
  console.log(`${matrix[rP][cP - 1]} ${matrix[rP - 1][cP - 1]}`);

  console.log(result);
}

squareWithMaximumSum([
  "3, 6",
  "7, 1, 3, 3, 2, 1",
  "1, 3, 9, 8, 5, 6",
  "4, 6, 7, 9, 1, 0",
]);
