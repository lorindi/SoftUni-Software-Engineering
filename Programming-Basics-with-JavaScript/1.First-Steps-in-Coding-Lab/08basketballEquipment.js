function basketballEquipment(input){
    yearFee = Number(input[0])
    let priceShoes = yearFee - (yearFee * 0.40)
    let priceTeam = priceShoes - (priceShoes * 0.20)
    let priceBasketball = priceTeam / 4
    let priceAccessories = priceBasketball / 5
    let totalPEquipment =  yearFee + priceShoes + priceTeam + priceBasketball + priceAccessories
    console.log(totalPEquipment)

}
basketballEquipment(["365 "])