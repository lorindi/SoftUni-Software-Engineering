function perfectNumber(num){
    let sum = 0
    for (let i = 0; i <= num + 1; i++){
        if (num % i == 0){
            sum += i
            if (num === sum){
                break;
            }
        }

    }
    if (num === sum){
        console.log("We have a perfect number!");

    } else {
        console.log("It's not so perfect.");
    }

}
perfectNumber(1236498)