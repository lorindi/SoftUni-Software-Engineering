// function task(list) {

//   if (list.length === 1) {
//     console.log(0);
//     return;
//   }

//   let biggestNum = Math.max(...list);
//   let searchIndex = list.indexOf(biggestNum);
//   let leftSum = 0;
//   let counterLeft = 0;
//   let rightSum = 0;

//   for (let i = 0; i < list.length; i++) {
//     i < searchIndex
//       ? ((leftSum += list[i]), counterLeft++)
//       : i > searchIndex
//       ? (rightSum += list[i])
//       : 0;
//   }
//   console.log(leftSum === rightSum ? counterLeft : 'no');
// }

// task([1, 2, 3, 3]);
// task([1, 2]);
// task([1]);
// task([1, 2, 3]);
// task([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);


function task(list) {
    let totalSum = list.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
    
    for (let i = 0; i < list.length; i++) {
      let rightSum = totalSum - leftSum - list[i];
      if (leftSum === rightSum) {
        console.log(i);
        return;
      }
      leftSum += list[i];
    }
    
    console.log("no");
  }
  
  task([1, 2, 3, 3]);          // Извежда: 2
//   task([1, 2]);                // Извежда: no
//   task([1]);                   // Извежда: 0
//   task([1, 2, 3]);             // Извежда: no
//   task([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);  // Извежда: 3
  