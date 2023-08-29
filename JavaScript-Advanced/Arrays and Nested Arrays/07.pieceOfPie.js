function pieceOfPie(array, start, end){
    let startIndex = array.indexOf(start)
    let endIndex = array.indexOf(end)
    let result = array.slice(startIndex, endIndex +1)
    return result

}
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));