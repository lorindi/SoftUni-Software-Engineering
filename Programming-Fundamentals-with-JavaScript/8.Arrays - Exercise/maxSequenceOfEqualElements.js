function task(list) {
  let sequence = 1;
  let maxSequence = 0;
  let maxSequenceNum = 0;
  let listLength = list.length;

  for (let i = 0; i < listLength; i++) {
    if (i !== 0) {
      let currentNumber = Number(list[i]);
      let prevNumber = Number(list[i - 1]);

      if (currentNumber === prevNumber) {
        sequence++;

        if (sequence > maxSequence) {
          maxSequence = sequence;
          maxSequenceNum = currentNumber;
        }
      } else {
        sequence = 1;
      }
    }
  }
  console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`);
  
}
task([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]
);
