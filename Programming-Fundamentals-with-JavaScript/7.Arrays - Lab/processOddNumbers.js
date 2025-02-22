function task(list) {
  let nums = [];
  for (let i = 0; i < list.length; i++) {
    if (i % 2 !== 0) {
      nums.push(list[i] * 2);
    }
  }
  console.log(nums.reverse().join(" "));
}

task([10, 15, 20, 25]);
