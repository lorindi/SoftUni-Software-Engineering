function subtract() {
    let first = document.getElementById('firstNumber')
    let second = document.getElementById('secondNumber')
    let result = document.getElementById('result')
    result.textContent = (parseFloat(first.value) - parseFloat(second.value))
}