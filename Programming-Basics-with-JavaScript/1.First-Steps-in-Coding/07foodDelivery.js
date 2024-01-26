function foodDelivery(input){
    let numberOfChickenMenus = Number(input[0])
	let numberOfFishMenus = Number(input[1])
	let numberOfVegetarianMenus = Number(input[2])
    let priceChickenMenus = numberOfChickenMenus * 10.35
    let priceFishMenus = numberOfFishMenus * 12.40
    let priceVegetarianMenus = numberOfVegetarianMenus * 8.15
    let totalPriceMenus = priceChickenMenus + priceFishMenus + priceVegetarianMenus
    let dessertPrice = totalPriceMenus * 0.2
    let priceOfDelivery = 2.50
    let totalOrderPrice = totalPriceMenus + dessertPrice + priceOfDelivery
    console.log(totalOrderPrice)
}
foodDelivery([" 2 ", "4 ", "3 "])