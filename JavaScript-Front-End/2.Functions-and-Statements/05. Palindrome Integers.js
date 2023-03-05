function palindromeIntegers(array) {
    let result = array.map(el => el.toString().split('').reverse().join('') === el.toString());
    console.log(result.join('\n'));
}
  
palindromeIntegers([123, 323, 421, 121]);
  