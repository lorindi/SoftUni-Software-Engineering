function calculator(input){
    let depositSum = Number(input[0])
    let months = Number(input[1])
    let percent = Number(input[2])
    let sum = depositSum + months *((depositSum * percent / 100) / 12)
    console.log(sum)
}
calculator(["200 ", "3 ", "5.7 "])