function repainting(input){
    let nylon = Number(input[0])
    let paint = Number(input[1])
    let diluent = Number(input[2])
    let hours = Number(input[3])
    let amountNylon = (nylon + 2) * 1.50
    let amountPaint = (paint + (paint * 0.10)) * 14.50
    let diluentAmount = diluent * 5
    let sumMaterials = amountNylon + amountPaint + diluentAmount + 0.40
    let sumHours = (sumMaterials * 0.30) * hours 
    let finalSum = sumMaterials + sumHours
    console.log(finalSum)

}
repainting([" 10 ", "11 ", "4 ", "8 "])