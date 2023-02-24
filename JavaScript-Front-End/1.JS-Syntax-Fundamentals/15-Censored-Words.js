function censoredWords(text, word){
    let result = text.replace(word, '*'.repeat(word.length));
    console.log(result);

}
censoredWords('Find hidden the hidden word', 'hidden')
function solve(text, word) {

    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);

}
solve('Find hidden the hidden word', 'hidden')