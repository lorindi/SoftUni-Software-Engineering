function sumMatrixColumn(input) {
  let [rows, cols] = input
    .shift()
    .split(", ")
    .map((num) => Number(num));
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let currentRow = input[i].split(" ").map((num) => Number(num));
    matrix.push(currentRow);
  }
  let sum = 0;
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      sum += matrix[row][col]
    }
    console.log(sum);
    sum = 0
  }
}

sumMatrixColumn(["3, 6", "7 1 3 3 2 1", "1 3 9 8 5 6", "4 6 7 9 1 0"]);
