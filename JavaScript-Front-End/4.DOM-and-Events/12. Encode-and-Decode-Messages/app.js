function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll("button");
    buttons[0].addEventListener("click", encode);
    buttons[1].addEventListener("click", decode);

    function encode(e){
        let newMsg = ""
        let currentText = e.target.parentElement.children[1].value;

        for (let i = 0; i < currentText.length; i++){
            let currentCh = currentText[i].charCodeAt();
            newMsg += String.fromCharCode(currentCh + 1);
        }
        let textArea = document.querySelectorAll("textarea")
        let resultTextArea = textArea[1];
        resultTextArea.value = newMsg;
        let currentTextArea = textArea[0];
        currentText.value = ""

    }
    function decode(e){
        let currentArea = e.target.parentElement.children[1];
        let currentText = currentArea.value;
        let resultMsg = ""
        for (let i = 0; i < currentText.length; i++) {
            let ch = currentText[i].charCodeAt();
            resultMsg += String.fromCharCode(ch - 1)
        }
        currentArea.value = resultMsg
        
    }
}