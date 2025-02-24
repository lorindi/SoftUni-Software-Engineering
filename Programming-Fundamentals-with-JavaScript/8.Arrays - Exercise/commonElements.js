function task(array, list) {
  let arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    if (list.includes(array[i])) {
      console.log(array[i]);
    }
  }
}
task(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);
