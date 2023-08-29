function smallestTwoNumbers(list){
    for (let i = 0; i < 2; i++){
        let minNumber = Math.min(...list)
        let index = list.indexOf(minNumber)
        list.splice(index, 1)
        console.log(minNumber);

    }

}
smallestTwoNumbers([30, 15, 50, 5])
