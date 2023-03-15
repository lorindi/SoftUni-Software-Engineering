function addItem() {
    const ulList = document.getElementById('items')
    const input = document.getElementById('newItemText')
    const newLi = document.createElement('li')
    newLi.textContent = input.value
    // Взимаме стойността на това,което пишем
    ulList.appendChild(newLi)
    input.value = ''
}