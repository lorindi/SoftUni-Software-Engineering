function wordsTracker(list) {
  let obj = {};
  let countFirst = 0;
  let countSecond = 0;
  let [first, second] = list.shift().split(" ");

  countFirst = list
    .map((element) => (element === first ? 1 : 0))
    
    .reduce((acc, curr) => acc + curr, 0);
  countSecond = list
    .map((element) => (element === second ? 1 : 0))
    .reduce((acc, curr) => acc + curr, 0);
  obj[first] = countFirst;
  obj[second] = countSecond;
  // Създаване на списък от ключове в обекта, сортиран според стойностите им в низходящ ред
  const sortedKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  // Създаване на нов обект с ключовете в сортираната последователност
  const sortedObj = {};
  sortedKeys.forEach((key) => {
    console.log(`${key} - ${obj[key]}`);
    
  });
  
}
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);

// --------------------------------------------------------------
function wordsTracker(inputArray) {
  let words = inputArray.shift(inputArray[0]).split(' ');
  console.log(words)
  let wordsCount = {};

  for (const word of words) {
      wordsCount[word] = inputArray.filter(w => w === word).length;
  }

  // for (const currentWord of inputArray) {
  //     if (currentWord in wordsCount) {
  //         wordsCount[currentWord]++;
  //     }
  // }

  wordsCount = Object.entries(wordsCount)
  .sort(([,a],[,b]) => b - a)
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  for (const [word, count] of Object.entries(wordsCount)) {
      console.log(`${word} - ${count}`);
  }
}
wordsTracker([
    "is the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "the",
    "And",
    "finally",
    "the",
    "the",
    "sentence",
  ])

// ---------- Solution 2 ----------

// function wordsTracker(inputArray) {
//   let words = inputArray.shift(inputArray[0]).split(' ');
//   let wordsCount = {};

//   for (const word of words) {
//       wordsCount[word] = inputArray.filter(w => w === word).length;
//   }

//   wordsCount = Object.entries(wordsCount)
//   .sort(([,a],[,b]) => b - a)
//   .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

//   for (const [word, count] of Object.entries(wordsCount)) {
//       console.log(`${word} - ${count}`);
//   }
// }