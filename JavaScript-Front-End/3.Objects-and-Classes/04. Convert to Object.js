function printJson(jsonString) {
  const obj = JSON.parse(jsonString);
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
const jsonString = '{"name": "George", "age": 40, "town": "Sofia"}';
printJson(jsonString);
