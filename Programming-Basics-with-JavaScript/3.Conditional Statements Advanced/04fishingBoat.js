function fishingBoat(input){
    let budget = Number(input[0])
    let season = String(input[1])
    let numberFishermen = Number(input[2])
    let rent = 0
    let extraDiscount = 0
    let discount = 0
  
    //  "Spring", "Summer", "Autumn", "Winter"
    if (season == 'Spring'){
        rent = 3000
        if (numberFishermen % 2 == 0){
            extraDiscount = rent * 0.05
        }if (numberFishermen <= 6) {
            discount = rent * 0.10
        }else if (numberFishermen > 7 && numberFishermen <= 11) {
            discount = rent * 0.15
        }else if (numberFishermen > 12) {
            discount = rent * 0.25
        }
    }else if (season == "Summer"){
        rent = 4200
        if (numberFishermen % 2 == 0){
            extraDiscount = rent * 0.05
        }if (numberFishermen <= 6) {
            discount = rent * 0.10
        }else if (numberFishermen > 7 && numberFishermen <= 11) {
            discount = rent * 0.15
        }else if (numberFishermen > 12) {
            discount = rent * 0.25
        }
    }else if (season == 'Autumn'){
        rent = 4200
        if (numberFishermen <= 6) {
            discount = rent * 0.10
        }else if (numberFishermen > 7 && numberFishermen <= 11) {
            discount = rent * 0.15
        }else if (numberFishermen > 12) {
            discount = rent * 0.25
        }
    }else if (season == 'Winter'){
        rent = 2600
        if (numberFishermen % 2 == 0){
            extraDiscount = rent * 0.05
        }if (numberFishermen <= 6) {
            discount = rent * 0.10
        }else if (numberFishermen > 7 && numberFishermen <= 11) {
            discount = rent * 0.15
        }else if (numberFishermen > 12) {
            discount = rent * 0.25
        }
    }
    let result = budget - (rent - extraDiscount - discount)
    if (result < 0){
        console.log(`Not enough money! You need ${Math.abs(result).toFixed(2)} leva.`)
    }else {
        console.log(`Yes! You have ${Math.abs(result).toFixed(2)} leva left.`)
    }
}
fishingBoat(["2000",
"Winter",
"13"])

