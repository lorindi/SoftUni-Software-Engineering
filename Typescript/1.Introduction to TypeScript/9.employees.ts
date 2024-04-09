function employees(array: string[]): void {
  array.forEach((data) => {
    console.log(`Name: ${data} -- Personal Number: ${data.length}`);
  });
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
