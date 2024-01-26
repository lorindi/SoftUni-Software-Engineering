function toyShop(input){
    let excursionPrice = Number(input[0])
    let numberOfPuzzles = Number(input[1])
    let numberOfTalkingDolls = Number(input[2])
    let numberOfTeddyBears = Number(input[3])
    let numberOfMinions = Number(input[4])
    let numberOfTrucks  = Number(input[5])

    let orderSum = numberOfPuzzles * 2.60 + numberOfTalkingDolls * 3 + numberOfTeddyBears * 4.10 + numberOfMinions * 8.20 + numberOfTrucks * 2 
    let numberOfToys = numberOfPuzzles + numberOfTalkingDolls + numberOfTeddyBears + numberOfMinions + numberOfTrucks
    if (numberOfToys >= 50){
        orderSum  -= orderSum * 0.25
    }
    let rent = orderSum  * 0.10

    let netProfit = orderSum - rent
   
    // let diff = Math.abs(netProfit - excursionPrice)
 
    if (netProfit >= excursionPrice) {
        console.log(`Yes! ${(netProfit - excursionPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(excursionPrice - netProfit).toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])




