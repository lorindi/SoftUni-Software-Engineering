// function showText() {
//   let text = document.getElementById("more");
//   let span = document.getElementById("text");
//   text.style.textDecoration = "none";
//   text.textContent = span.textContent;
// }
function showText() {
    let span = document.getElementById("text").style.display = 'inline';
    let aHref = document.getElementById("more").style.display = 'none';
}
