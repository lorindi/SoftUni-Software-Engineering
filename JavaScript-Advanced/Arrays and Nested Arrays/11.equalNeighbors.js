function equalNeighbors(matrix) {
    let equalPairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            console.log(matrix[i][j]);
            console.log(matrix[i][j + 1]);
            if (matrix[i][j] === matrix[i][j + 1]) {
                equalPairs++;
            }
        }
    }

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i + 1][j]) {
                equalPairs++;
            }
        }
    }

    return equalPairs;
}

const matrix = [['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']];

const result = equalNeighbors(matrix);
console.log(result);
