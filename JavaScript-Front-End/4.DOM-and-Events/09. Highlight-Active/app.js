function focused() {
    const target = Array.from(document.querySelectorAll('input'));
    target.forEach(element => {
        element.addEventListener("focus", (event) => {
            event.target.parentNode.className = 'focused';
        });
        element.addEventListener("blur", (event) => {
            event.target.parentNode.className = 'blurred';
        });
    });
}

function focused() {
    const inputAll = Array.from(document.getElementsByTagName('input'))
    for (const el of inputAll){
        

    }
}