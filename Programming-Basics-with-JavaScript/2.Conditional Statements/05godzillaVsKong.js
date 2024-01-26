function godzillaVsKong(input){
    let filmBudget = Number(input[0])
    let numberExtras = Number(input[1])
    let priceClothingExtra = Number(input[2])
    
    let decor = filmBudget * 0.10
    let amountForClothing = numberExtras * priceClothingExtra

    
    if (numberExtras >= 150){
        amountForClothing -= amountForClothing * 0.10

    }
    let totalCosts = decor + amountForClothing

    if (totalCosts > filmBudget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalCosts - filmBudget).toFixed(2)} leva more.`)
    }else{
        console.log("Action!")
        console.log(`Wingard starts filming with ${(filmBudget - totalCosts).toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["15437.62",
"186",
"57.99"])



