function sumTable() {
    const allTrTd = Array.from(document.querySelectorAll('table tr:not(:first-child):not(:last-child) td:nth-child(2)'));
    const totalSum = document.getElementById('sum')
    let sum = allTrTd.reduce((a, num) => {return a + parseFloat(num.textContent)}, 0);
    totalSum.textContent = sum;

}