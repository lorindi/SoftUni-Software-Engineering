function thePianist(array) {
  let number = Number(array.shift());
  let pieces = {};

  for (let i = 0; i < number; i++) {
    let [piece, composer, value] = array.shift().split("|");
    pieces[piece] = { composer, value };
  }
  line = array.shift();

  while (line != "Stop") {
    let currentPieces = line.split("|");
    let command = currentPieces.shift()
   

    if (command == "Add") {
      let [piece, composer, value] = currentPieces;
      console.log(add(piece, composer, value));
    } else if (command == "Remove") {
      let piece = currentPieces;
      console.log(remove(piece));
    } else if (command == "ChangeKey") {
      let [piece, newValue] = currentPieces;
      console.log(changeKey(piece, newValue));
    }

    line = array.shift();
  }

  function add(piece, composer, value) {
    if (!pieces.hasOwnProperty(piece)) {
      pieces[piece] = { composer, value };
      return `${piece} by ${composer} in ${value} added to the collection!`;
    } else {
      return `${piece} is already in the collection!`;
    }
  }
  function remove(piece) {
    if (pieces.hasOwnProperty(piece)) {
      delete pieces.piece;
      return `Successfully removed ${piece}!`;
    } else {
      return `Invalid operation! ${piece} does not exist in the collection.`;
    }
  }
  function changeKey(piece, newValue) {
    if (pieces.hasOwnProperty(piece)) {
      pieces.piece = newValue;
      return `Changed the key of ${piece} to ${newValue}!`;
    } else {
      return `Invalid operation! ${piece} does not exist in the collection.`;
    }
  }
  for (const key in pieces){
    console.log(`${key} -> Composer: ${pieces[key].composer}, Key: ${pieces[key].value}`)

  }
  
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);
