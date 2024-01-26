function numbersDivisibleBy9(input){
    let numberStart = Number(input[0])
    let numberEnd = Number(input[1])
    let sumNums = 0
    for (let i = numberStart; i <= numberEnd; i++){
        if (i % 9 == 0){
            sumNums += i
        }
    }
    console.log(`The sum: ${sumNums}`)
    for (let i = numberStart; i <= numberEnd; i++){
        if (i % 9 == 0){
            console.log(i)
        }
    }
}
numbersDivisibleBy9(["100", "200"])