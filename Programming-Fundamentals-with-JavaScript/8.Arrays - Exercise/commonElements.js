function task(array, list) {
  for (let i = 0; i < array.length; i++) {
    let currentEl = array[i];
    if (list.includes(array[i])) {
      console.log(array[i]);
    }
  }
}
task(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);
