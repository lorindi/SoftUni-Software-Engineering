function aggregateElements(array: number[]): void {
  const results = {
    sumElements: () => {
      return array.reduce((sum, value) => sum + value, 0);
    },
    sumInverse: () => {
      return array.reduce((sum, value) => sum + 1 / value, 0);
    },
    sumConcat: () => {
      return array.join("");
    },
  };

//   for (const [key, value] of Object.entries(results)) {
//     console.log(value());
//   }

  Object.entries(results).forEach(([key, value]) => {
    console.log(value());
  });

}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
