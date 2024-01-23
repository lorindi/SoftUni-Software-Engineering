// function smallShop(input){
//     let product = String(input[0])
//     let city = String(input[1])
//     let quantity = Number(input[2])
//     let totalPrice = 0

//     if (city === 'Sofia'){
//         if (product === 'coffee'){
//             totalPrice = quantity * 0.50 
//         }else if(product === 'water'){
//             totalPrice = quantity * 0.80 
//         }else if(product === 'beer'){
//             totalPrice = quantity * 1.20 
//         }else if(product === 'sweets'){
//             totalPrice = quantity * 1.45
//         }else if(product === 'peanuts'){
//             totalPrice = quantity * 1.60 
//         }
//     } else if (city === 'Plovdiv'){
//         if (product === 'coffee'){
//             totalPrice = quantity * 0.40 
//         }else if(product === 'water'){
//             totalPrice = quantity * 0.70 
//         }else if(product === 'beer'){
//             totalPrice = quantity * 1.15
//         }else if(product === 'sweets'){
//             totalPrice = quantity * 1.30
//         }else if(product === 'peanuts'){
//             totalPrice = quantity * 1.50 
//         }
//     } else if (city === 'Varna'){
//         if (product === 'coffee'){
//             totalPrice = quantity * 0.45
//         }else if(product === 'water'){
//             totalPrice = quantity * 0.70 
//         }else if(product === 'beer'){
//             totalPrice = quantity * 1.10 
//         }else if(product === 'sweets'){
//             totalPrice = quantity * 1.35
//         }else if(product === 'peanuts'){
//             totalPrice = quantity * 1.55 
//         }
//     }
// console.log(totalPrice)
// }
// smallShop(["coffee",
// "Varna",
// "2"])


function smallShop(input){
    let product = String(input[0]);
    let city = String(input[1]);
    let quantity = Number(input[2]);
    let totalPrice = 0;

    switch (city) {
        case 'Sofia':
            switch (product) {
                case 'coffee': totalPrice = quantity * 0.50; break;
                case 'water': totalPrice = quantity * 0.80; break;
                case 'beer': totalPrice = quantity * 1.20; break;
                case 'swets': totalPrice = quantity * 1.45; break;
                case 'peanuts': totalPrice = quantity * 1.60; break;
            }
            break;
        case 'Plovdiv':
            switch (product) {
                case 'coffee': totalPrice = quantity * 0.40; break;
                case 'water': totalPrice = quantity * 0.70; break;
                case 'beer': totalPrice = quantity * 1.15; break;
                case 'swets': totalPrice = quantity * 1.30; break;
                case 'peanuts': totalPrice = quantity * 1.50; break;
            }
            break;
        case 'Varna':
            switch (product) {
                case 'coffee': totalPrice = quantity * 0.45; break;
                case 'water': totalPrice = quantity * 0.70; break;
                case 'beer': totalPrice = quantity * 1.10; break;
                case 'swets': totalPrice = quantity * 1.35; break;
                case 'peanuts': totalPrice = quantity * 1.55; break;
            }
            break

    }
console.log(totalPrice)
}   
smallShop(["coffee",
"Varna",
"2"])
