function knightGame(input) {
  let size = Number(input.shift());
  let matrix = input.slice(0, size).map((row) => row.split(""));

  let position = [
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [-1, 2],
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
  ];
  let removedKnights = 0;

  function isValidPosition(row, col) {
    return row >= 0 && row < size && col >= 0 && col < size;
  }

  function countAttacks(row, col) {
    let attacks = 0;
    for (let pos of position) {
      let posRow = row + pos[0];
      let posCol = col + pos[1];
      if (isValidPosition(posRow, posCol) && matrix[posRow][posCol] === "K") {
        attacks++;
      }
    }
    return attacks;
  }

  while (true) {
    let maxAttacks = 0;
    let knightWithMostAttacksPos = null;

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (matrix[row][col] === "K") {
          let attacks = countAttacks(row, col);
          if (attacks > maxAttacks) {
            maxAttacks = attacks;
            knightWithMostAttacksPos = [row, col];
          }
        }
      }
    }

    if (maxAttacks === 0) {
      break;
    }

    let [row, col] = knightWithMostAttacksPos;
    matrix[row][col] = "0";
    removedKnights++;

    for (let pos of position) {
      let posRow = row + pos[0];
      let posCol = col + pos[1];
      if (isValidPosition(posRow, posCol) && matrix[posRow][posCol] === "K") {
        for (let i = 0; i < position.length; i++) {
          let newPosRow = posRow + position[i][0];
          let newPosCol = posCol + position[i][1];
          if (
            isValidPosition(newPosRow, newPosCol) &&
            matrix[newPosRow][newPosCol] === "K"
          ) {
            let newAttacks = countAttacks(newPosRow, newPosCol);
            if (newAttacks === 0) {
              matrix[posRow][posCol] = "0";
              removedKnights++;
              break;
            }
          }
        }
      }
    }
  }

  return removedKnights;
}

console.log(
  knightGame([
    "8",
    "0K0KKK00",
    "0K00KKKK",
    "00K0000K",
    "KKKKKK0K",
    "K0K0000K",
    "KK00000K",
    "00K0K000",
    "000K00KK",
  ])
);

console.log(knightGame(["5", "0K0K0", "K000K", "00K00", "K000K", "0K0K0"]));
