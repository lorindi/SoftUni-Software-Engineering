function symbolInMatrix(input) {
  let n = input
    .shift()
    .split("")
    .map((num) => Number(num));

  let matrix = [];
  
  for (let i = 0; i < n; i++) {
    matrix.push(input.shift().split(""));
  }


  let symbol = input.shift();
  let isValid = false;
  let col = 0;
  let row = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let currentSymbol = matrix[i][j];
      if (matrix[i][j] === symbol) {
        isValid = true;
        row = i;
        col = j;
        break;
      }
    }
  }
  console.log( isValid ? `(${row}, ${col})` : `${symbol} does not occur in the matrix`);
  // if (isValid) {
  //   console.log(`(${row}, ${col})`);
  // } else {
  //   console.log(`${symbol} does not occur in the matrix`);
  // }
}

symbolInMatrix(["3", "ABC", "DEF", "X!@", "!"]);
