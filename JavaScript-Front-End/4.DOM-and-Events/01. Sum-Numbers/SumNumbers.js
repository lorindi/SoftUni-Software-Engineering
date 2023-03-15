function calc() {
    let firstInput = document.getElementById('num1')
    let secondInput = document.getElementById('num2')
    let sumInput = document.getElementById('sum')

    let fI = Number(firstInput.value)
    let sI = Number(secondInput.value)
    let sum = fI + sI
    sumInput.value = sum
    // TODO: sum = num1 + num2
}
