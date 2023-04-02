function shoppingList(array) {

  let groceries = array.shift().split("!");
  let line = array.shift();

  while (line != "Go Shopping!") {
    let [command, item, newItem] = line.split(" ");
   
    if (command == "Urgent" && !groceries.includes(item)) {
      groceries.unshift(item);

    }else if (command == "Unnecessary" && groceries.includes(item)) {
      let index = groceries.indexOf(item);
      groceries.splice(index, 1);

    }else if (command == "Correct" && groceries.includes(item)) {
      let index = groceries.indexOf(item);
      groceries[index] = newItem;

    }else if (command == "Rearrange") {
      groceries.push(groceries.splice(groceries.indexOf(item), 1));
    }

    line = array.shift();
  }

  console.log(groceries.join(", "));
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
