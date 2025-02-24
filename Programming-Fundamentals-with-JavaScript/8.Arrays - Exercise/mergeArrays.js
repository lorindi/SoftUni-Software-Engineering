function task(firstList, secondList) {

  let newList = [];
  let firstListLength = firstList.length;

  for (let i = 0; i < firstListLength; i++) {
    newList.push(
      i % 2 === 0
        ? Number(firstList[i]) + Number(secondList[i])
        : firstList[i] + secondList[i]
    );
  }

  console.log(newList.join(" - "));
  
}
task(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
