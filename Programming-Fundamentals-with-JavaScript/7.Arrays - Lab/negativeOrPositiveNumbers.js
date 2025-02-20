function task(list) {
  let deque = [];
  for (let el of list) {
    let num = Number(el);
    if (num >= 0) {
      deque.push(num);
    } else {
      deque.unshift(num);
    }
  }
  deque.forEach((num) => console.log(num));
}

task(['3', '-2', '0', '-1']);
