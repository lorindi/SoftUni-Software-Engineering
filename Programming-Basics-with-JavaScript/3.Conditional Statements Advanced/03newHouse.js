function newHouse(input){
    let typeFlowers = String(input[0])
    let numberFlowers = Number(input[1])
    let budget = Number(input[2])
    let result = 0
    if (typeFlowers == 'Roses'){
        if (numberFlowers > 80){
            budget -= (numberFlowers * 5) - ((numberFlowers * 5) * 0.10) 
        }else{
            budget -= numberFlowers * 5
        }
    }else if (typeFlowers == 'Dahlias'){
        if (numberFlowers > 90){
            budget -= (numberFlowers * 3.80) - ((numberFlowers * 3.80) * 0.15) 
        }else{
            budget -= numberFlowers * 3.80
        }
    }else if (typeFlowers == 'Tulips'){
        if (numberFlowers > 80){
            budget -= (numberFlowers * 2.80) - ((numberFlowers * 2.80) * 0.15) 
        }else{
            budget -= numberFlowers * 2.80
        }
    }else if (typeFlowers == 'Narcissus'){
        if (numberFlowers < 120){
            budget -= (numberFlowers * 3) + ((numberFlowers * 3) * 0.15) 
        }else{
            budget -= numberFlowers * 3
        }
    }else if (typeFlowers == 'Gladiolus'){
        if (numberFlowers < 80){
            budget -= (numberFlowers * 2.50) + ((numberFlowers * 2.50) * 0.20) 
        }else{
            budget -= numberFlowers * 2.50
        }
    }
if (budget >= 0){
    console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlowers} and ${budget.toFixed(2)} leva left.`)
}else {
    console.log(`Not enough money, you need ${Math.abs(budget).toFixed(2)} leva more.`)
}
}
newHouse(["Tulips",
"88",
"260"])

