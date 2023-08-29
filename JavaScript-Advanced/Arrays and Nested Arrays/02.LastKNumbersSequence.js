function lastKNumbersSequence(first, second) {
    let array = [];
    for (let i = 0; i < first; i++) {
      if (array.length <= 1) {
        array.push(1);
      } else if (array.length > 1 && array.length < second) {
        let sum = array.reduce(
          (accumulator, currentNumber) => accumulator + currentNumber,
          0
        );
        array.push(sum);
      } else {
        let numbers = array.slice(-second);
        let sum = numbers.reduce(
          (accumulator, currentNumber) => accumulator + currentNumber,
          0
        );
        array.push(sum);
      }
    }
    return array
  }
  console.log(lastKNumbersSequence(8, 2));