function fruit(type, grams, money){
    let result = (grams / 1000) * money
    console.log(`I need ${result.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${type}.`);

}
fruit('apple', 1563, 2.35)