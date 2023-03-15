function extractText() {
    const listLi = Array.from(document.querySelectorAll('#items > li'))
    const textArea = document.getElementById('result')
    listLi.forEach((li) => textArea.textContent += li.textContent + '\n')
   
}