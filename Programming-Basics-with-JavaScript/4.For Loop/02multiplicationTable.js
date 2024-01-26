function multiplicationTable(input){
    let number = Number(input[0])
    for (let i = 1; i<=10; i++){
        console.log(`${i} * ${number} = ${i * number}`)
    }

}
multiplicationTable(["5"])