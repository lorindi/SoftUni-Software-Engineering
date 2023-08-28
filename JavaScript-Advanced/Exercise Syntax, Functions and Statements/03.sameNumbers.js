// function sameNumbers(number) {
//   numbers = number.toString().split("");
//   let sum = 0;
//   let isTrue = true;
//   let num = numbers.shift();
//   sum += Number(num);

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== num) {
//       isTrue = false;
//     }

//     sum += Number(numbers[i]);
//   }
//   console.log(isTrue);
//   console.log(sum);
// }
// sameNumbers(1234);

function sameNumbers(number) {
    const digits = Array.from(String(number), Number); // Преобразуваме числото в масив от цифри
    const firstDigit = digits[0];
    let isTrue = digits.every(digit => digit === firstDigit); // Проверяваме дали всички цифри са еднакви
    const parsedNumbers = digits.map(str => Number(str));
    const sum = parsedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(isTrue);
    console.log(sum);
}

sameNumbers(1234);
