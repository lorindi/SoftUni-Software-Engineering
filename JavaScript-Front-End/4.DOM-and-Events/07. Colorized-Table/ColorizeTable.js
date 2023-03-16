function colorize() {
    const evenTr = Array.from(document.querySelectorAll('table tr:nth-child(even)'))
    .forEach((tr) => tr.style.backgroundColor = 'Teal');
    
}
