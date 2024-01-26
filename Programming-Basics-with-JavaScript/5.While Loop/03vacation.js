function vacation(input){
    let dayOfSpend = 0
    let dayCounter = 0
    
    index = 0

    let neededMoney = Number(input[index])
    index++
    let budget = Number(input[index])
    index++
    while (true){
        let command = input[index]
        index++
        let money = Number(input[index])
        index++
        dayCounter += 1

        if (command == 'spend'){
            dayOfSpend += 1

            if (budget - money < 0){
                budget = 0
            }else{
                budget -= money
            }if (dayOfSpend == 5){
            
                break
            }


        }else if (command == 'save'){
            dayOfSpend = 0
            budget += money
            
            if (budget >= neededMoney){
                break
            }
        }
        

    }
    
    
    if (budget >= neededMoney){
        console.log(`You saved the money for ${dayCounter} days.`)
    }else{
        console.log(`You can't save the money.`)
        console.log(`${dayCounter}`)
        
    }
    
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])

