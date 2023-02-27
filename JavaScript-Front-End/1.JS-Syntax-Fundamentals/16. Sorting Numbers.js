function sortingNumbers(array) {
    let sorted = [];
    array = array.sort((a, b) => a-b);

    while (array.length > 0){
        sorted.push(array.shift());
        sorted.push(array.pop());

  
    }
    return sorted;


}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
