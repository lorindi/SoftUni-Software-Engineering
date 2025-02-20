function task(list) {
  let arrayManipulations = list.shift().split(" ").map(Number);
  let commandsObj = {
    Add: function (num) {
      arrayManipulations.push(num);
    },
    Remove: function (num) {
      let index = arrayManipulations.indexOf(num);
      if (index !== -1) arrayManipulations.splice(index, 1);
    },
    RemoveAt: function (num) {
      arrayManipulations.splice(num, 1);
    },
    Insert: function (num, ind) {
      arrayManipulations.splice(ind, 0, num);
    },
  };

  for (let line of list) {
    let [command, el, i] = line.split(" ");
    let num = Number(el);
    let ind = Number(i);

    if (commandsObj[command]) {
      commandsObj[command](num, ind);
    }
  }
  console.log(arrayManipulations.join(" "));
}

task(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
task(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);

