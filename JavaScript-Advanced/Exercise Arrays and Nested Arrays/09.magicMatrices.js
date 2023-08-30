function magicMatrices(matrix) {
    let uniqueElements = new Set()
  for (let i = 0; i < matrix.length; i++) {
    let currentRowSum = 0
    
    for (let j = 0; j < matrix[i].length; j++) {
        let currentLine = matrix[i][j]
        currentRowSum += currentLine;
    }
    uniqueElements.add(currentRowSum)
  }

  for (let i = 0; i < matrix.length; i++) {
    let currentRowSum = 0
    
    for (let j = 0; j < matrix.length; j++) {
        let currentLine = matrix[j][i]
        currentRowSum += currentLine;
    }
    uniqueElements.add(currentRowSum)
  }
  if (uniqueElements.size == 1){
    console.log('true');
  }else {
    console.log(false);
  }
 
}
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
