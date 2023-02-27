// function pascalCaseSplitter(text) {
//   let count = 1;
//   let result = [];
//   let start = 0;
//   let end = 0;
//   for (let i = 0; i < text.length; i++) {

//     let letter = text[i];
//     let data = text[i + 1];

//     if (text[i] === text[i].toUpperCase() && count === 1) {
//       start = i;
//       count += 1;
//     } else if (data != undefined) {
//       if (text[i + 1] === text[i + 1].toUpperCase() && count === 2) {
//         end = i + 1;
//         result.push(text.slice(start, end));

//         count -= 1;
//       }
//     } else if (data === undefined) {
        
//         end = i;
//         result.push(text.slice(start, end + 1));

//         count -= 1;
        
//     }
//   }
//   console.log(result.join(', '))
// }
// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');


function pascalCaseSplit(text) {
    let pattern = '[A-Z][a-z]*';
    let matches = text.matchAll(pattern);
    let arr = [];

    for (let word of matches) {
        arr.push(word[0]);
    }

    console.log(arr.join(', '));

}
pascalCaseSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')