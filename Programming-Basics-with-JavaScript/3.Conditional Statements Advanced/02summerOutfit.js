function summerOutfit(input){
    let degrees = Number(input[0])
    let twentyFourHours = String(input[1])
    let outfit = ''
    let shoes = ''

    if (twentyFourHours == 'Morning') {
        if (degrees >= 10 && degrees <= 18){
            outfit = 'Sweatshirt'
            shoes = 'Sneakers'
        }else if (degrees > 18 && degrees <= 24){
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }else if (degrees >= 25){
            outfit = 'T-Shirt'
            shoes = 'Sandals'
        }
    }
    else if (twentyFourHours == 'Afternoon') {
        if (degrees >= 10 && degrees <= 18){
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }else if (degrees > 18 && degrees <= 24){
            outfit = 'T-Shirt'
            shoes = 'Sandals'
        }else if (degrees >= 25){
            outfit = 'Swim Suit'
            shoes = 'Barefoot'
        }
    }
    else if (twentyFourHours == 'Evening') {
        if (degrees >= 10 && degrees <= 18){
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }else if (degrees > 18 && degrees <= 24){
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }else if (degrees >= 25){
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["16",
"Morning"])
