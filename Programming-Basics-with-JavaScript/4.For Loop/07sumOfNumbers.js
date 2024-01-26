function  sumOfNumbers(input){
    let numStr = String(input[0])
    let result = 0
    for (let i = 0; i < numStr.length; i++){
        result += Number(numStr[i])
    }
    console.log(`The sum of the digits is:${result}`)
}
sumOfNumbers(["1234"])