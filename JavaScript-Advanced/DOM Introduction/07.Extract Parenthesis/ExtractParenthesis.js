// function extract(content) {
//   let contentElement = document.getElementById(content);
//   let contentText = contentElement.textContent.split("");

//   let textLength = contentText.length;

//   for (let i = 0; i < textLength; i++) {
//     console.log(contentText[i]);
//     if (contentText[i] == "(" || contentText[i] == ")") {
//       contentText[i] = "";
//     }
//   }
//   contentElement.textContent = contentText.join("");
// }
function extract(content) {

    let para = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(para);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(para);
    }
    return result.join("; ")
}