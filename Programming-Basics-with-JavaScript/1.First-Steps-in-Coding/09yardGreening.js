function yardGreening(input){
    let sqMeters = Number(input[0])
    let discount = (sqMeters * 7.61 ) * 0.18
    let totalSum = sqMeters * 7.61 - discount
    console.log(`The final price is: ${totalSum} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(["550"])