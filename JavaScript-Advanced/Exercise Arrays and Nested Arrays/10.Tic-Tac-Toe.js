function ticTacToe(array) {
  function searchFalse(matrix) {
    if (
      matrix[0][0] !== false &&
      matrix[0][1] !== false &&
      matrix[0][2] !== false &&
      matrix[1][0] !== false &&
      matrix[1][1] !== false &&
      matrix[1][2] !== false &&
      matrix[2][0] !== false &&
      matrix[2][1] !== false &&
      matrix[2][2] !== false
    ) {return true
    }
    return false
  }

  function returnTrueFalse(matrix, playerName) {
    if (
      (matrix[0][0] === playerName &&
        matrix[0][0] === matrix[0][1] &&
        matrix[0][1] === matrix[0][2]) ||
      (matrix[1][0] === playerName &&
        matrix[1][0] === matrix[1][1] &&
        matrix[1][1] === matrix[1][2]) ||
      (matrix[2][0] === playerName &&
        matrix[2][0] === matrix[2][1] &&
        matrix[2][1] === matrix[2][2]) ||
      (matrix[0][0] === playerName &&
        matrix[0][0] === matrix[1][0] &&
        matrix[1][0] === matrix[2][0]) ||
      (matrix[0][1] === playerName &&
        matrix[0][1] === matrix[1][1] &&
        matrix[1][1] === matrix[2][1]) ||
      (matrix[0][2] === playerName &&
        matrix[0][2] === matrix[1][2] &&
        matrix[1][2] === matrix[2][2]) ||
      (matrix[0][0] === playerName &&
        matrix[0][0] === matrix[1][1] &&
        matrix[1][1] === matrix[2][2]) ||
      (matrix[0][2] === playerName &&
        matrix[0][2] === matrix[1][1] &&
        matrix[1][1] === matrix[2][0])
    ) {
      return true;
    }
    return false;
  }
  matrix = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let playerTurn = 0;
  let players = {
    playerOne: { name: "X", isTrue: false },
    playerTwo: { name: "O", isTrue: false },
  };
  while (array.length != 0) {
    let [row, col] = array.shift().split(" ").map(Number);

    if (searchFalse(matrix)) {
      break;
    }

    if (matrix[row][col] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue; 
    }

    if (playerTurn === 0) {
      matrix[row][col] = players.playerOne.name;
      playerTurn = 1;
      if (returnTrueFalse(matrix, players.playerOne.name)) {
        let info = returnTrueFalse(matrix);
        players.playerOne.isTrue = true;
        break;
      }
    } else if (playerTurn === 1) {
      if (matrix[row][col] === false) {
        matrix[row][col] = players.playerTwo.name;
        playerTurn = 0;
        if (returnTrueFalse(matrix, players.playerTwo.name)) {
          players.playerTwo.isTrue = true;
          break;
        }
      }
    }
  }
  if (players.playerOne.isTrue === true) {
    console.log(`Player ${players.playerOne.name} wins!`);
  } else if (players.playerTwo.isTrue === true) {
    console.log(`Player ${players.playerTwo.name} wins!`);
  } else {
    console.log("The game ended! Nobody wins :(");
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("\t"));
  }
}
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
