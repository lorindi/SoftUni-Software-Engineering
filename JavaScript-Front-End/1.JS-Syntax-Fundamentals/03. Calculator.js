function calculator(first, operator, second) {
    let result = 0

    if (operator == '+'){
        result = first + second;


    }else if (operator == '-'){
        result = first - second;
        
    }else if (operator == '*'){
        result = first * second;
        
    }else { 
        result = first / second;


    }
    console.log(result.toFixed(2));


}
calculator(25.5,
    '-',
    3);
