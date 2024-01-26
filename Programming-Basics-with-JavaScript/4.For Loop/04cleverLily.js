function cleverLily(input){
    let age = Number(input[0])
    let priceWashingMachine = Number(input[1])
    let priceToy = Number(input[2])
    let numberOfToys = 0
    let totalMoney = 0
    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            totalMoney += ((i / 2) * 10) -1
        }else {
            numberOfToys += 1
        }
    }
    
    totalMoney += priceToy * numberOfToys
    let totalSum = Math.abs(totalMoney - priceWashingMachine)
    if (totalMoney >= priceWashingMachine){
        console.log(`Yes! ${totalSum.toFixed(2)}`);
    } else{
        console.log(`No! ${totalSum.toFixed(2)}`)
    }
}
cleverLily(["21",
"1570.98",
"3"])

