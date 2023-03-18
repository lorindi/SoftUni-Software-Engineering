function solve() {
  const [generateTextArea, buyTextArea] =
    document.getElementsByTagName("textarea");
  const [generateBtn, byBtn] = Array.from(
    document.getElementsByTagName("button")
  );
  const tbody = document.querySelector(".table > tbody");
  buyBtn.addEventListener('click', buyHandler)

  generateBtn.addEventListener("click", generateHandler);
  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement("tr", "", tbody);
      const firstColumnTd = createElement("td", "", tableRow);
      const htmlImg = createElement("img", "", firstColumnTd, "", "", {
        src: img,
      });
      const secondColumnTd = createElement("td", "", tableRow);
      createElement("p", name, secondColumnTd);
      const thirdColumnTd = createElement("td", "", tableRow);
      createElement("p", price, thirdColumnTd);
      const fourthColumnTd = createElement("td", "", tableRow);
      createElement("p", decFactor, fourthColumnTd);

      const fifthColumnTd = createElement("td", "", tableRow);
      createElement("input", "", fifthColumnTd, "", "", { type: "checkbox" });
    }
  }
}
function buyHandler() {
  const allCheckedInputs = Array.from(document.querySelectorAll('tbody tr input:checked'));
  let boughItems = [];
  let totalPrice = 0;
  let totalDecFactor = 0;

  for (const input of allCheckedInputs){
    const tableRow = input.parentElement.parentElement;
    const [_firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children)
    let item = secondColumn.children[0].textContent;
    boughItems.push(item)
  }

}
function createElement(type, content, parentNode, id, classes, attributes) {
  const htmlElement = document.createElement(type);

  if (content && type !== "input") {
    htmlElement.textContent = content;
  }
  if (content && type !== "input") {
    htmlElement.value = content;
  }
  if (id) {
    htmlElement.id = id;
  }
  if (classes) {
    htmlElement.classList.add(...classes);
  }
  if (parentNode) {
    parentNode.appendChild(htmlElement);
  }
  if (attributes) {
    for (const key in attributes) {
      htmlElement.setAttribute(key, attributes[key]);
    }
  }
  return htmlElement;
}
