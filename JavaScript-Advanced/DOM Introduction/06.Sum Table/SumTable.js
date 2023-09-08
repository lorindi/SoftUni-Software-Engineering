function sumTable() {
    let result = Array.from(document.querySelectorAll('table tbody tr:not(:first-child) td:nth-child(2)'))
        .map(td => Number(td.textContent))
        .reduce((accumulator, number) => accumulator += number, 0);

    let sum = document.getElementById("sum");
    sum.textContent = result.toFixed(2); 
}