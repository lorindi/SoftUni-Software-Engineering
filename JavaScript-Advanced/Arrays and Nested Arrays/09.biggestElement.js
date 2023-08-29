function biggestElement(matrix){
    let list = []
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            
            list.push(matrix[i][j])
        }
    }
    return Math.max(...list)
    console.log();
}
biggestElement([[20, 50, 10],
    [8, 33, 145]])