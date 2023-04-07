function thePianist(array) {
  let number = Number(array.shift());
  let pieces = {};
  for (let i = 0; i < number; i++) {
    let [piece, composer, key] = array.shift().split("|");
    pieces[piece] = { composer, key };
  }
  // console.log(pieces)
  line = array.shift();
  while (line != "Stop") {
    let [command, piece, composer, key] = line.split("|");

    if (command == "Add") {
      if (!pieces.hasOwnProperty(piece)) {
        pieces[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`)
      }
    }else if (command == "Remove") {
      if (pieces.hasOwnProperty(piece)) {
        delete pieces[piece];
        console.log(
          `Successfully removed ${piece}!`
        );
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
      }
    }else if (command == "ChangeKey") {
      if (pieces.hasOwnProperty(piece)) {
        pieces[piece].key = composer
        // let value = pieces[piece]
        // pieces[composer] = value
        // delete pieces[piece]
      
        console.log(
          `Changed the key of ${piece} to ${composer}!`
        );
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
      }
    }
    // console.log(piece,composer,key);
    line = array.shift();
  }
  for (const data in pieces){
    console.log(`${data} -> Composer: ${pieces[data].composer}, Key: ${pieces[data].key}`)
  }
}
thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
