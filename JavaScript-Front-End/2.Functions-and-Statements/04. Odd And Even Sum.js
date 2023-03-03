function oddAndEvenSum(number){
    number = number.toString()
    let list = []
    let odd = 0
    let even = 0
    for (let i = 0; i < number.length; i++){
        list.push(number[i])

    }
    list.forEach(el => even.push(el % 2 == 0) )
    return list

}
console.log(oddAndEvenSum(1000435));