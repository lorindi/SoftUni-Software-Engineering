function sameNumbers(numbers){
    let sum = 0
    let currentNum = 0
    let bool = false
    numbers = String(numbers)
   
    for (let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i]);
        currentNum = Number(numbers[0]);
        if (currentNum != Number(numbers[i])){
            bool = true;
        }
    }
    if (bool){
        console.log('false');
        console.log(sum);

    }else {
        console.log('true');
        console.log(sum);

    }

}
sameNumbers(1234)