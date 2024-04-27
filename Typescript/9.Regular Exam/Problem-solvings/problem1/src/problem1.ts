function printAndSum(startParameter: number, endParameter: number): void {

  let sum: number = 0;
  let list: number[] = [];

  for (let i = startParameter; i <= endParameter; i++) {

    list.push(i);

    sum += i;
  }

  console.log(list.join(" "));

  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
// printAndSum(0, 26);
// printAndSum(50, 60);
