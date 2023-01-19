function vegetableMarket(input) {
let vegetableForKilo = Number(input[0]);
let fruitsForKilo = Number(input[1]);
let totalVegetable = Number(input[2]);
let totalFruits = Number(input[3]);
let euro = 1.94 
let totalSum = (vegetableForKilo * totalVegetable + fruitsForKilo * totalFruits) / euro
console.log(totalSum.toFixed(2));

}

vegetableMarket(["0.194",
    "19.4",
    "10",
    "10"
])
