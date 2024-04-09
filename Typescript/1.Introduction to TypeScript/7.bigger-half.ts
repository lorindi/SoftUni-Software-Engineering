function biggerHalf(list: number[]): void {
// Сортира масива във възходящ ред
// a - b => ascending order
// a + b => desending order
  const sortedList = list.sort((a, b) => a - b);

  // Намира броя на елементите, които трябва да вземем
  const halfLength = Math.ceil(sortedList.length / 2);

  // Половината елементи (по-големите)
  const sortListHalf = sortedList.slice(-halfLength);

  console.log(sortListHalf);
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
