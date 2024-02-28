function presentDelivery(input) {
    function eatCookie(presents, niceKidsVisited) {
      for (let coordinates of Object.values(directions)) {
        r = santaPos[0] + coordinates[0];
        c = santaPos[1] + coordinates[1];
        if (
          matrix[r][c].includes("X") ||
          matrix[r][c].includes("V") ||
          matrix[r][c].includes("C")
        ) {
          if (matrix[r][c] === "V") {
            niceKidsVisited += 1;
          }
          matrix[r][c] = "-";
          presents -= 1;
        }
        if (presents === 0) {
          break;
        }
      }
      return [presents, niceKidsVisited];
    }
  
    let presents = Number(input.shift());
    let size = Number(input.shift());
  
    let matrix = [];
    let santaPos = [];
    let totalNiceKids = 0;
    let niceKidsVisited = 0;
  
    let directions = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    };
  
    for (let row = 0; row < size; row++) {
      let line = input.shift().split(" ");
      matrix.push(line);
      if (line.includes("S")) {
        santaPos = [row, line.indexOf("S")];
        //   console.log((santaPos = [row, line.indexOf("S")]));
        matrix[row][santaPos[1]] = "-";
      }
      totalNiceKids += line.reduce(
        (count, char) => (char === "V" ? count + 1 : count),
        0
      );
    }
    let command = input.shift();
    while (command != "Christmas morning") {
      santaPos = [
        santaPos[0] + directions[command][0],
        santaPos[1] + directions[command][1],
      ];
      house = matrix[santaPos[0]][santaPos[1]];
      if (house === "V") {
        niceKidsVisited += 1;
        presents -= 1;
      } else if (house === "C") {
        [presents, niceKidsVisited] = eatCookie(presents, niceKidsVisited);
      }
      matrix[santaPos[0]][santaPos[1]] = "-";
      if (presents === 0 || niceKidsVisited == totalNiceKids) {
        break;
      }
      // if (input.length === 0) {
      //   break;
      // }
  
      command = input.shift();
    }
    matrix[santaPos[0]][santaPos[1]] = "S";
  
    if (presents === 0 && niceKidsVisited < totalNiceKids) {
      console.log("Santa ran out of presents!");
    }
  
    matrix.forEach((row) => console.log(row.join(" ")));
  
    if (niceKidsVisited == totalNiceKids) {
      console.log(`Good job, Santa! ${niceKidsVisited} happy nice kid/s.`);
    } else {
      console.log(
        `No presents for ${totalNiceKids - niceKidsVisited} nice kid/s.`
      );
    }
  }
//   presentDelivery([
//     "5",
//     "4",
//     "- X V -",
//     "- S - V",
//     "- - - -",
//     "X - - -",
//     "up",
//     "right",
//     "down",
//     "right",
//     "Christmas morning",
//   ]);
  presentDelivery([
    "3",
    "4",
    "- - - -",
    "V - X -",
    "- V C V",
    "- - - S",
    "left",
    "up",
  ]);