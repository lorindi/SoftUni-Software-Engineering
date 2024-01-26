function fruitOrVegetable(input) {
    let argument = String(input[0])
    result = ''
    switch (argument) {
        case 'banana': result = 'fruit'; break;
        case 'apple': result = 'fruit'; break;
        case 'kiwi': result = 'fruit'; break;
        case 'cherry': result = 'fruit'; break;
        case 'lemon': result = 'fruit'; break;
        case 'grapes': result = 'fruit'; break;
        case 'tomato': result = 'vegetable'; break;
        case 'cucumber': result ='vegetable'; break;
        case 'pepper': result = 'vegetable'; break;
        case 'carrot': result = 'vegetable'; break;
        default:
            result ='unknown'
    }
console.log(result)
}
fruitOrVegetable(["kiwi"])