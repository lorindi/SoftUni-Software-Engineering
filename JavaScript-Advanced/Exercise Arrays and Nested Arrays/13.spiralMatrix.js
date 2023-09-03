function generateSpiralMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(Array(cols).fill(0));
  }

  let num = 1;
  let rowStart = 0;
  let rowEnd = rows - 1;
  let colStart = 0;
  let colEnd = cols - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = num++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = num++;
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = num++;
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = num++;
      }
      colStart++;
    }
  }

  for (let i = 0; i < rows; i++) {
    console.log(matrix[i].join(" "));
  }
}
generateSpiralMatrix(4, 4);
