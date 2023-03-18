function create(words) {
  const contentDiv = document.getElementById("content");
  for (const word of words) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    contentDiv.appendChild(newDiv)
    newDiv.appendChild(newP)
    newP.textContent = word
    newP.style.display = 'none'

    newDiv.addEventListener('click', () => {
      newP.style.display = 'block'
    })
   }
}
