type personInfoObject = {
  [key: string]: string | number;
};
function personInfo(
  firstName: string,
  lastName: string,
  age: string | number
): void {
  const personInfoObj: personInfoObject = { firstName, lastName, age };
  Object.entries(personInfoObj).forEach(([key, value]) =>
    console.log(`${key}: ${value}`)
  );
}
personInfo("Peter", "Pan", "20");
