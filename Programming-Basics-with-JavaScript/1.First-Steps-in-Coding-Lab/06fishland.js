function fishland(input) {
    let priceOfMackerel = Number(input[0]);
    let priceOfSprat = Number(input[1]);
    let kilogramsOfBonito = Number(input[2]);
    let kilogramsOfSaffton = Number(input[3]);
    let kilogramsOfMussels = Number(input[4]);
    let priceOfBonito = priceOfMackerel * 1.60
    let priceOfSaffton = priceOfSprat * 1.80
    let priceOfMusseles = 7.50

    let sum = priceOfBonito * kilogramsOfBonito + priceOfSaffton * kilogramsOfSaffton + priceOfMusseles * kilogramsOfMussels

    console.log(sum.toFixed(2));
    
}

fishland(["6.90",
    "4.20",
    "1.5",
    "2.5",
    "1"
])