function processOddPositions(list){
    let numbers = []
    let filterNumbers = list.map((num, i) => {
        if (i % 2 != 0){
            numbers.push(num * 2)
        }
    })
    console.log(numbers.reverse().join(' '));
}
processOddPositions([3, 0, 10, 4, 7, 3])