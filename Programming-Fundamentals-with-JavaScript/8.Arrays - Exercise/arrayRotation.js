// function task(list, rotation){
//     for (let i = 0; i < rotation; i++){
//         list.push(list.shift(list[i]))
//     }
//     console.log(list.join(' '));
    
// }
// task([32, 21, 61, 1], 4)

function task(list, rotation) {
    const r = rotation % list.length;
    const rotatedList = list.slice(r).concat(list.slice(0, r));
    console.log(rotatedList.join(' '));
  }
  
  task([51, 47, 32, 61, 21], 2);