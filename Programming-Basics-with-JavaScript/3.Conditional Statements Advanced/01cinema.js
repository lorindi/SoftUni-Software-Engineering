function cinema(input){
    let typeProjection = String(input[0])
    let rows = Number(input[1])
    let cols = Number(input[2])
    let price = 0
    if (typeProjection == 'Premiere') {
        price = 12.00
    }else if (typeProjection == 'Normal') {
        price = 7.50
    }else if (typeProjection == 'Discount') {
        price = 5.00
    }
    result = price * rows * cols
    console.log(result.toFixed(2))
}
cinema(["Premiere",
"10",
"12"])
