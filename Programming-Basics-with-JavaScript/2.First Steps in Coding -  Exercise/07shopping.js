function shopping(input){
    let budget = Number(input[0])
    let numberVideoCards = Number(input[1])
    let numberProcessors = Number(input[2])
    let numberRAM = Number(input[3])

    let videoCards = numberVideoCards * 250
    let processors = numberProcessors * (videoCards * 0.35)
    let ram = numberRAM * (videoCards * 0.10)
    let totalPrice = videoCards + processors + ram
    if (numberVideoCards > numberProcessors){
        totalPrice -= totalPrice * 0.15
    }
    if (budget >= totalPrice){
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(Math.abs(budget - totalPrice)).toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
"3",
"1",
"1"])

