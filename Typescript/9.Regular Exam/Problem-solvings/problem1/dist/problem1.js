function printAndSum(startParameter, endParameter) {
    let sum = 0;
    let list = [];
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
