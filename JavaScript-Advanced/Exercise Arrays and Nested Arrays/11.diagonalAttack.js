function diagonalAttack(array) {
  //   let matrix = [];
  //   while (array.length > 0) {
  //     line = array.shift().split(" ").map(Number);
  //     matrix.push(line);
  //   }

  let matrix = array.map((row) => row.split(" ").map(Number));

  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    firstDiagonal += matrix[i][i];
    secondDiagonal += matrix[i][matrix.length - 1 - i];
  }

  if (firstDiagonal === secondDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && j !== matrix.length - 1 - i) {
          matrix[i][j] = firstDiagonal;
        }
      }
    }
  }
  for (line of matrix) {
    console.log(line.join(" "));
  }
}
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);
