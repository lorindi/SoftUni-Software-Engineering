function squareOfStars(num){
    let matrix = []
    for (let i = 0; i < num; i++){
        matrix[i] = []
        for (let j = 0; j < num; j++){
            matrix[i][j] = '*'
        }
    }
    for (let i = 0; i < num; i++){
        console.log(matrix[i].join(' '));
    }
    

}
squareOfStars(2)