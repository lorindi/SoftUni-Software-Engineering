function sumNumbers(input){
    let sumNums = 0
    let idx = 0
    
    let num = Number(input[idx])
    idx++

    let currentNum = Number(input[idx])
    idx++
    while (num > sumNums){
        sumNums += currentNum

        currentNum = Number(input[idx])
        idx++
    }

    console.log(sumNums)
    
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])


