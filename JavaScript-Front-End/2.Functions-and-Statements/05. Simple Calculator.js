function simpleCalculator(first, second, operator){
    let result = 0
    if (operator == 'add'){
        result = first + second

    }else if (operator == 'subtract'){
        result = first - second

    }else if (operator == 'multiply'){
        result = first * second

    }else {
        result = first / second

    }
    console.log(result);

}
simpleCalculator(40,
    8,
    'divide')