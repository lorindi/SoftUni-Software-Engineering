function greatestCommonDivisor(num1, num2){

    const result = gcd(num1, num2);
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    
    
    console.log(result);
}
greatestCommonDivisor(2154, 458)

// function greatestCommonDivisor(firstNum, secondNum) {
//     let divisor = 0;

//     if (firstNum > secondNum) {
//         for (let i = 1; i <= secondNum; i++) {
//             if (firstNum % i === 0 && secondNum % i === 0) {
//                 divisor = i;
//             }
//         }
//     } else {
//         for (let i = 1; i <= secondNum; i++) {
//             if (firstNum % i === 0 && secondNum % i === 0) {
//                 divisor = i;
//             }
//         }
//     }
//     console.log(divisor);
// }
// greatestCommonDivisor(2154, 458)