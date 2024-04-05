let numbers: number[] = [-3, -5, -22.5];
function largestNumber(...numbers: number[]): number {
  return Math.max(...numbers);
}
console.log(`The largest number is ${largestNumber(...numbers)}`);
