function colorize() {
    let tableCells = Array.from(document.querySelectorAll('table tr:nth-child(even)')).forEach((cell) => cell.style.backgroundColor = 'Teal')
}