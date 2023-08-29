function negativePositiveNumbers(list){
    let array = []
    while (list.length > 0){
        let currentElement = list.shift()
        if (currentElement < 0){
            array.unshift(currentElement)

        }
        else {
            array.push(currentElement)
        }
    }
    console.log(array.join('\n'));

}
negativePositiveNumbers([7, -2, 8, 9])