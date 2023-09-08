function editElement(element, match, replacer) {
    const text = element.textContent;
    const newText = text.split(match).join(replacer);
    element.textContent = newText;
}