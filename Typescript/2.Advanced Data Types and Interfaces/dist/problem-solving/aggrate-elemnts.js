const sumNumbers = (numbers, inversed = false) => {
    let sum = 0;
    numbers.forEach((num) => {
        const numToSum = inversed ? 1 / num : num;
        sum += numToSum;
        // if (inversed) {
        //   sum += 1 / num;
        // } else {
        //   sum += num;
        // }
    });
    return sum;
};
const concatNumbers = (numbers) => {
    return numbers.join("");
};
const aggregateElements = (numbers) => {
    // sum
    const sum = sumNumbers(numbers);
    // sum inversed
    const sumInversed = sumNumbers(numbers, true);
    // concat
    const concatedNums = concatNumbers(numbers);
    // Output
    console.log(sum);
    console.log(sumInversed);
    console.log(concatedNums);
};
// Input: [1, 2, 3]
// Output:
//  6
//  1.8333333333333333
//  123
// aggregateElements([1, 2, 3]);
// Input: [2, 4, 8, 16]
// Output:
//   30
//   0.9375
//   24816
aggregateElements([2, 4, 8, 16]);
