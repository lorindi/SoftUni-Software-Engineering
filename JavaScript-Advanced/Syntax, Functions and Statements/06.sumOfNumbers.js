function sumOfNumbers(first, second){
    let result = 0
    for (let num = Number(first); num <= Number(second); num++){
        result += Number(num)

    }
    console.log(result);
}
sumOfNumbers('1', '5' )