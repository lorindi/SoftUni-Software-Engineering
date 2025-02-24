function task(list, magicNum) {
  let listLength = list.length;
  

  for (let i = 0; i < listLength; i++) {
    if (i !== 0) {
      let prevNumber = Number(list[i - 1])

      for (let j = i; j < listLength; j++) {
        let currentNum = Number(list[j]);
        let sum = currentNum + prevNumber

        if (sum === magicNum) {
          console.log(`${prevNumber} ${currentNum}`);
        }
      }
    }
  }
}

task([1, 2, 3, 4, 5, 6], 6);
