function biggerHalf(array){
    let result = ''
    let half = Math.ceil(array.length / 2)
    let sortList = array.sort((a, b) => a-b)
    if (array.length % 2 == 0){
        result = sortList.slice(half)

    }
    else {
        result = sortList.slice(half - 1)
    }
    return result;

}
biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])