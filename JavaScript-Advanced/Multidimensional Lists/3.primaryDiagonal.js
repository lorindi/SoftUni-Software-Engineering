function sumMatrixColumn(input) {
    let n = Number(input.shift());
    let matrix = [];
    let result = 0
    for (let i = 0; i < n; i++) {
      let currentRow = input[i].split(" ").map((num) => Number(num));
      matrix.push(currentRow);
      result += matrix[i][i]
    }
    console.log(result);

  }
  
  sumMatrixColumn(["3", "11 2 4", "4 5 6", "10 8 -12"]);
  