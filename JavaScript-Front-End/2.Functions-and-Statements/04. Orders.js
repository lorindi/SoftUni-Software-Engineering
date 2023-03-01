function orders(product, quantity){
    
    if (product == 'coffee'){
        console.log((1.50 * quantity).toFixed(2))

    } else if (product == 'water'){
        console.log((1.00 * quantity).toFixed(2))

    }else if (product == 'coke'){
        console.log((1.40 * quantity).toFixed(2))

    }else if (product == 'snacks'){
        console.log((2.00 * quantity).toFixed(2))

    }
}
orders("water", 5)