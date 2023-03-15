function oddOccurrences(string) {
  let obj = {};
  let words = string.split(" ");
  words.sort();
  for (let word of words) {
    word = word.toLowerCase();
    if (!obj.hasOwnProperty(word)) {
      obj[word] = 0;
    }
    obj[word] += 1;
  }

  let array = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value % 2 !== 0) {
      array.push(key);
    }
  }
  console.log(array)
//   let sortedArray = array.sort((a, b) => b.localeCompare(a));
//   console.log(sortedArray.join(' '));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
