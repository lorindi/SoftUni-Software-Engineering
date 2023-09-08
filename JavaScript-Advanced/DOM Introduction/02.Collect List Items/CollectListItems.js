// function extractText() {
//   let allElements = document.querySelectorAll('li');
//   let textArea = document.getElementById("result");
//   let elements = []
//   for (const el of allElements){
//     elements.push(el.textContent)
     

//   }
//   textArea.textContent = elements.join('\n');
  
// }
function extractText() {
    let allElements = document.querySelectorAll('li');
    let textArea = document.getElementById("result");
    
    let elements = Array.from(allElements).map(el => el.textContent);
    
    textArea.textContent = elements.join('\n');
  }
//   function extractText() {
//     let allElements = document.querySelectorAll('li');
//     let textArea = document.getElementById("result");
//     let elements = [];
    
//     for (const el of allElements) {
//       elements.push(el.innerHTML);
//     }
    
//     textArea.innerHTML = elements.join('<br>');
//   }
  