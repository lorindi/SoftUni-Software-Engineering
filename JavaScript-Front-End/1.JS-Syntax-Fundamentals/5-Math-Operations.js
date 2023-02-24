function mathOperations(first, second, operator){
    result = ''
    if (operator == '+') {
        result = first + second

    }else if (operator == '-') {
        result = first - second

    }else if (operator == '*') {
        result = first * second

    } else {
        result = first / second

    }
    console.log(result);

}
mathOperations(5, 6, '+')