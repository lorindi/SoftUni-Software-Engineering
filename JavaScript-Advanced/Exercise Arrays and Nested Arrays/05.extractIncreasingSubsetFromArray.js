function extractIncreasingSubsetFromArray(array){
    let list = []
    let biggestNumber = 0
    for (let i = 0; i<array.length; i++ ){
        if (array[i] > biggestNumber){
            biggestNumber = array[i]
            list.push(array[i])

        }
        

    }
    return list

}
extractIncreasingSubsetFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1])