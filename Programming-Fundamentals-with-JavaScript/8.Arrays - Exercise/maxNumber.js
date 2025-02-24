function task(list) {
  let bigger = [];
  let number = 0;
  let reverseList = list.reverse()
  for (let num of reverseList) {
    number = num > number ? num : number;
    if (!bigger.includes(number)) {
      bigger.push(number);
    }
  }
  console.log(bigger.reverse().join(' '));
}
task([14, 24, 3, 19, 15, 17]);
