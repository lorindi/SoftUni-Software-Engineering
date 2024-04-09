function evenPositionElement(array: string[]): void {
  const result: string[] = array.filter((value, index) => index % 2 === 0);
  console.log(result.join(', '));
}
evenPositionElement(["20", "30", "40", "50", "60"]);
