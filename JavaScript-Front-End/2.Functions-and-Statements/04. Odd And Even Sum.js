function oddAndEvenSum(number) {
    const digits = number.toString().split("").map(Number);
    
    const sumEven = digits.filter(digit => digit % 2 === 0).reduce((acc, curr) => acc + curr, 0);
    
    const sumOdd = digits.filter(digit => digit % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}
console.log(oddAndEvenSum(3495892137259234))
