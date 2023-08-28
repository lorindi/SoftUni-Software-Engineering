function wordsUppercase(text){
    const result = text.match(/\w+/g);
    console.log(result.join(', ').toUpperCase());
}
wordsUppercase('Hi, how are you?')
