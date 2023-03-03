function addAndSubtract(first, second, third){
    function sum(first, second){
        return first + second

    }
    function subtract(first, second, third){
        let result = sum(first, second)
        return result - third

    }
    return subtract(first, second, third)
}
console.log(addAndSubtract(1,
    17,
    30))