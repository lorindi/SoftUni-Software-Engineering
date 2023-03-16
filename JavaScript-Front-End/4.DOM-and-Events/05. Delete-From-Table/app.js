function deleteByEmail() {
    const allTd = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const input = document.querySelector('input[name="email"]');
    const result = document.getElementById('result');
    let newValueForInput = input.value;
    let foundTd = allTd.find((td) => td.textContent == newValueForInput);
    // console.log(foundTd);

    if (foundTd){
        foundTd.parentElement.remove()
        result.textContent = 'Deleted.';

    }
    else{
        result.textContent = 'Not found.';
    }


}