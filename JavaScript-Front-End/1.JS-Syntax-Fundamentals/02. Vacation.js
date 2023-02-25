function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek){
    let totalPrice = 0
    if (dayOfTheWeek == 'Friday'){
        if (typeOfTheGroup == 'Students'){
            price =  8.45 


        }else if (typeOfTheGroup == 'Business'){
            price = 10.90 
         

        }else if (typeOfTheGroup == 'Regular'){
            price = 15 
          

        }

        
        

    }else if (dayOfTheWeek == 'Saturday'){
        if (typeOfTheGroup == 'Students'){
            price =  9.80 


        }else if (typeOfTheGroup == 'Business'){
            price = 15.60 
        

        }else if (typeOfTheGroup == 'Regular'){
            price = 20 
       

        }

        
    }
    else if (dayOfTheWeek == 'Sunday'){
        if (typeOfTheGroup == 'Students'){
            price =  10.46


        }else if (typeOfTheGroup == 'Business'){
            price = 16 


        }else if (typeOfTheGroup == 'Regular'){
            price = 22.50


        }
  
        
    }
    if (groupOfPeople >= 30 && typeOfTheGroup == 'Students') {
        totalPrice =  price * groupOfPeople - (( price * groupOfPeople) * 0.15) 

    } else if (groupOfPeople >= 100 && typeOfTheGroup == 'Business') {
        totalPrice = price * (groupOfPeople - 10) 

    } else if (groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfTheGroup == 'Regular') {
        totalPrice = (price * groupOfPeople) - ((price * groupOfPeople) * 0.05)

    } else {
        totalPrice =  price * groupOfPeople

    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30,
    "Students",
    "Sunday")
vacation(40,
    "Regular",
    "Saturday")