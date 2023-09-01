function orbit(array) {
  let rowMatrixSize = array[0];
  let colMatrixSize = array[1];
  let rowMatrixCoordinates = array[2];
  let colMatrixCoordinates = array[3];
  let matrix = [];

  for (let i = 0; i < rowMatrixSize; i++) {
    matrix[i] = [];
  }
  matrix[rowMatrixCoordinates][colMatrixCoordinates] = 1;
  for (let row = 0; row < rowMatrixSize; row++) {
    for (let col = 0; col < colMatrixSize; col++) {
      matrix[row][col] =
        Math.max(
          Math.abs(row - rowMatrixCoordinates),
          Math.abs(col - colMatrixCoordinates)
        ) + 1;
    }
  }

  //   for (row of matrix) {
  //     console.log(row.join(" "));
  //   }
  matrix.forEach((row) => console.log(row.join(" ")));
}
orbit([5, 5, 2, 2]);
