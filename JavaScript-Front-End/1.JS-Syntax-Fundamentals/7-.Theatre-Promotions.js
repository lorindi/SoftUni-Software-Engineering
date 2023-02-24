function theatrePromotions(typeOfDay, age){
    let priceOfTicket = 0
    
    if (typeOfDay === 'Weekday'){
        if (age >= 0 && age <= 18){
            priceOfTicket = 12

        }else if (age > 18 && age <= 64){
            priceOfTicket = 18

        }else if (age > 64 && age <= 122){
            priceOfTicket = 12

        }

    } else if (typeOfDay === 'Weekend'){
        if (age >= 0 && age <= 18){
            priceOfTicket = 15

        }else if (age > 18 && age <= 64){
            priceOfTicket = 20

        }else if (age > 64 && age <= 122){
            priceOfTicket = 15

        }

    }else if (typeOfDay === 'Holiday'){
        if (age >= 0 && age <= 18){
            priceOfTicket = 5

        }else if (age > 18 && age <= 64){
            priceOfTicket = 12

        }else if (age > 64 && age <= 122){
            priceOfTicket = 10

        }

    }
    if (age < 0 || age > 122){
        console.log('Error!')

    }else {
        console.log(`${priceOfTicket}$`);

    }
    
}
theatrePromotions('Weekday', -42)