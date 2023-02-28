function wordsUppercase(text){
    let pattern = '[a-zA-Z]+';
    let matches = text.matchAll(pattern);
    let arr = [];

    for (let word of matches) {
      
        arr.push((word[0]).toUpperCase());
    }

    console.log(arr.join(', '));
    

}
wordsUppercase('hello')