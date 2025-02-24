function task(list) {
  let sumOldArray = 0;
  let sumNewArray = 0;
  let arrayLength = list.length
  let currentNumber;
  for (let i = 0; i < arrayLength; i++) {
    sumOldArray += list[i];
    currentNumber = list[i] % 2 === 0 ? list[i] + i : list[i] - i;
    sumNewArray += currentNumber
    list[i] = currentNumber
  }
  console.log(list);
  console.log(sumOldArray);
  console.log(sumNewArray);
}
task([-5, 11, 3, 0, 2]);
