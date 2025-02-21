// function task(n, k) {
//   let list = [1];
//   for (let i = 1; i < n; i++) {
//     let currentNumber;
//     if (i === 1) {
//       currentNumber = 1;
//     } else if (i === 2) {
//       currentNumber = list[i - 2] + list[i - 1];
//     } else if (list.length < k) {
//       currentNumber = list.reduce((acc, num) => acc + num, 0);
//     } else {
//       currentNumber = list.slice(i - k, i).reduce((acc, num) => acc + num, 0);
//     }
//     list.push(currentNumber);
//   }
//   console.log(list.join(' '));
  
// }

// task(8, 2);

function task(n, k) {
    let list = [1];
    let sum = 1; 
  
    for (let i = 1; i < n; i++) {
      list.push(sum); 
  
      if (i >= k) {
        sum -= list[i - k];
      }
  
      sum += list[i]; 
    }
  
    console.log(list.join(' '));
  }
  
  task(8, 2);
  