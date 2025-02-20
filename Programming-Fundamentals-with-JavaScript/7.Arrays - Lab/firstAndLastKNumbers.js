function task(list) {
  let k = list.shift();
  console.log(list.slice(0, k).join(' '));
  console.log(list.slice(-k, list.length).join(' '));
}

task([2, 7, 8, 9]);
