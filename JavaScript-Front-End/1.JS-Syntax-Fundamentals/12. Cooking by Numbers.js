function cookingByNumbers(number, ...args){
    number = Number(number)
    let result = 0
    for (let i = 0; i < 5; i++){
        let command = args.shift()
        if (command == 'chop'){
            result = number / 2;
            number = result
            console.log(result);

        }else if (command == 'dice'){
            result = Math.sqrt(number);
            number = result
            console.log(result);

        }else if (command == 'spice'){
            result = number + 1;
            number = result
            console.log(result);

        }else if (command == 'bake'){
            result = number * 3;
            number = result
            console.log(result);

        }else if (command == 'fillet'){
            result = number - (number * 0.20);
            number = result
            console.log(result);

        }

    }

}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')