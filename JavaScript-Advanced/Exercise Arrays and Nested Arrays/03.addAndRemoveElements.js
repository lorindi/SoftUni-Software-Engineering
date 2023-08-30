function addAndRemoveElements(array) {
  let list = [];
  let sum = 1;
  let manipulation = {
    add: () => {
      list.push(sum);
      sum++;
    },
    remove: () => {
      let currentSum = list.pop();
      sum++;
    },
  };
  while (array.length > 0) {
    line = array.shift();
    if (manipulation.hasOwnProperty(line)) {
      manipulation[line]();
      sum++;
    }
  }
  if (list.length === 0) {
    console.log("Empty");
  } else {
    console.log(list.join("\n"));
  }
}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
