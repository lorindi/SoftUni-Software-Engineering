// function fruitShop(input){
//     let fruit = String(input[0])
//     let day = String(input[1])
//     let quantity = Number(input[2])
//     let result = 0
//     switch(day){
//         case 'Monday':
//             switch (fruit){
//                 case 'banana': result = quantity * 2.50; break;
//                 case 'apple': result = quantity * 1.20; break;
//                 case 'orange': result = quantity * 0.85; break;
//                 case 'grapefruit': result = quantity * 1.45; break;
//                 case 'kiwi': result = quantity * 2.70; break;
//                 case 'pineapple': result = quantity * 5.50; break;
//                 case 'grapes': result = quantity * 3.85; break;
//                 default:
//                     result = "error" 
//             }
//             break;
            
//         case 'Tuesday':
//             switch (fruit){
//                 case 'banana': result = quantity * 2.50; break;
//                 case 'apple': result = quantity * 1.20; break;
//                 case 'orange': result = quantity * 0.85; break;
//                 case 'grapefruit': result = quantity * 1.45; break;
//                 case 'kiwi': result = quantity * 2.70; break;
//                 case 'pineapple': result = quantity * 5.50; break;
//                 case 'grapes': result = quantity * 3.85; break;
//                 default:
//                     result = "error" 
//             }
//             break;
                 
//         case 'Wednesday':
//             switch (fruit){
//                 case 'banana': result = quantity * 2.50; break;
//                 case 'apple': result = quantity * 1.20; break;
//                 case 'orange': result = quantity * 0.85; break;
//                 case 'grapefruit': result = quantity * 1.45; break;
//                 case 'kiwi': result = quantity * 2.70; break;
//                 case 'pineapple': result = quantity * 5.50; break;
//                 case 'grapes': result = quantity * 3.85; break;
//                 default:
//                     result = "error" 
//             }
//             break;
                 
//         case 'Thursday':
//             switch (fruit){
//                 case 'banana': result = quantity * 2.50; break;
//                 case 'apple': result = quantity * 1.20; break;
//                 case 'orange': result = quantity * 0.85; break;
//                 case 'grapefruit': result = quantity * 1.45; break;
//                 case 'kiwi': result = quantity * 2.70; break;
//                 case 'pineapple': result = quantity * 5.50; break;
//                 case 'grapes': result = quantity * 3.85; break;
//                 default:
//                     result = "error" 
//             }
//             break;
                 
//         case 'Friday':
//             switch (fruit){
//                 case 'banana': result = quantity * 2.50; break;
//                 case 'apple': result = quantity * 1.20; break;
//                 case 'orange': result = quantity * 0.85; break;
//                 case 'grapefruit': result = quantity * 1.45; break;
//                 case 'kiwi': result = quantity * 2.70; break;
//                 case 'pineapple': result = quantity * 5.50; break;
//                 case 'grapes': result = quantity * 3.85; break;
//                 default:
//                     result = "error" 
//             }
//             break;
                 
//         case 'Saturday':
//             switch (fruit){
//                 case 'banana': result = quantity * 2.70; break;
//                 case 'apple': result = quantity * 1.25; break;
//                 case 'orange': result = quantity * 0.90; break;
//                 case 'grapefruit': result = quantity * 1.60; break;
//                 case 'kiwi': result = quantity * 3.00; break;
//                 case 'pineapple': result = quantity * 5.60; break;
//                 case 'grapes': result = quantity * 4.20; break;
//                 default:
//                     result = "error" 
//             }
//             break;
                 
//         case 'Sunday':
//             switch (fruit){
//                 case 'banana': result = quantity * 2.70; break;
//                 case 'apple': result = quantity * 1.25; break;
//                 case 'orange': result = quantity * 0.90; break;
//                 case 'grapefruit': result = quantity * 1.60; break;
//                 case 'kiwi': result = quantity * 3.00; break;
//                 case 'pineapple': result = quantity * 5.60; break;
//                 case 'grapes': result = quantity * 4.20; break;
//                 default:
//                     result = "error" 
//             }
//             break;
//         default:
//             result = "error" 
//     }
    
// }
// fruitShop(["apple",
// "Monday",
// "2"])

function fruitShop(input){
    let fruit = String(input[0])
    let day = String(input[1])
    let quantity = Number(input[2])
    let result = 0

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday'|| day === 'Thursday'|| day === 'Friday'){
        if (fruit === 'banana'){
            result = quantity * 2.50
            console.log(result.toFixed(2))
        }else if (fruit === 'apple') {
            result = quantity * 1.20
            console.log(result.toFixed(2))
        }else if (fruit === 'orange') {
            result = quantity * 0.85
            console.log(result.toFixed(2))
        }else if (fruit === 'grapefruit') {
            result = quantity * 1.45
            console.log(result.toFixed(2))
        }else if (fruit === 'kiwi') {
            result = quantity * 2.70
            console.log(result.toFixed(2))
        }else if (fruit === 'pineapple') {
            result = quantity * 5.50
            console.log(result.toFixed(2))
        }else if (fruit === 'grapes') {
            result = quantity * 3.85
            console.log(result.toFixed(2))
        }else {
            console.log('error')
        }


    }else if (day === 'Saturday' || day === 'Sunday'){
        if (fruit === 'banana'){
            result = quantity * 2.70
            console.log(result.toFixed(2))
        }else if (fruit === 'apple'){
            result = quantity * 1.25
            console.log(result.toFixed(2))
        }else if (fruit === 'orange') {
            result = quantity * 0.90
            console.log(result.toFixed(2))
        }else if (fruit === 'grapefruit') {
            result = quantity * 1.60
            console.log(result.toFixed(2))
        }else if (fruit === 'kiwi') {
            result = quantity * 3.00
            console.log(result.toFixed(2))
        }else if (fruit === 'pineapple') {
            result = quantity * 5.60
            console.log(result.toFixed(2))
        }else if (fruit === 'grapes') {
            result = quantity * 4.20
            console.log(result.toFixed(2))
        }else {
            console.log('error')
        }
    } else {
        console.log('error')
    }
}
fruitShop(["apple",
"Monday",
"2"])

