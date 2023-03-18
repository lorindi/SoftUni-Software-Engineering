function addItem() {
    const select = document.getElementById('menu');
    const newItemTextInput = document.getElementById('newItemText')
    const newItemValueInput = document.getElementById('newItemValue');

    const newItemTextValue = newItemTextInput.value;
    const newItemValue = newItemValueInput.value;
    const option = document.createElement('option');
    option.textContent = newItemTextValue;
    option.value = newItemValue;
    select.appendChild(option)
    newItemTextInput.value = ''
    newItemValueInput.value = ''
}