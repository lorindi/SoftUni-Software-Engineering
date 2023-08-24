function stringLength(first, second, third){
    let sumLength = first.length + second.length + third.length
    let averageLength = Math.floor(sumLength / 3)
    console.log(sumLength);
    console.log(averageLength);

}
stringLength('chocolate', 'ice cream', 'cake')