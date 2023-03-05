function factorialDevision(num1, num2) {
    let result1 = factorial(num1);
    let result2 = factorial(num2);

    function factorial(num) {
        if (num == 1) {
            return 1;
        }

        return num * factorial(num - 1);
    } 

    console.log(`${(result1 / result2).toFixed(2)}`);

}
factorialDevision(5,
    2)