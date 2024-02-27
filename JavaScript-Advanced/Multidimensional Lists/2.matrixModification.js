function matrixModification(input) {

  let size = Number(input.shift());
  let matrix = [];

  for (let i = 0; i < size; i++) {
    matrix.push(
      input
        .shift()
        .split(" ")
        .map((num) => Number(num))
    );
  }
  
  let commands = input.shift();

  while (commands != "END") {

    let [command, row, col, num] = commands
      .split(" ")
      .map((str, index) => (index === 0 ? str : Number(str)));

    if (row > size - 1 || col > size - 1 || col < 0 || row < 0) {
      console.log("Invalid coordinates");
    } else if (command === "Add") {
      matrix[row][col] += num;
    } else if (command === "Subtract") {
      matrix[row][col] -= num;
    }

    commands = input.shift();
  }

  matrix.forEach((row) => console.log(row.join(" ")));
}
// matrixModification([
//   "3",
//   "1 2 3",
//   "4 5 6",
//   "7 8 9",
//   "Add 0 0 5",
//   "Subtract 1 1 2",
//   "END",
// ]);
matrixModification([
  "4",
  "1 2 3 4",
  "5 6 7 8",
  "8 7 6 5",
  "4 3 2 1",
  "Add 4 4 100",
  "Add 3 3 100",
  "Subtract -1 -1 42",
  "Subtract 0 0 42",
  "END",
]);
