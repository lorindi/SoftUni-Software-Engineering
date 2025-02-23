function task(list1, list2) {
  let newList = [];
  for (let i = 0; i < list1.length; i++) {
    if (i % 2 === 0) {
      newList.push(Number(list1[i]) + Number(list2[i]));
    } else {
        newList.push(list1[i] + list2[i])
    }
  }
  console.log( newList.join(' - '));
  
 
}
task(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
