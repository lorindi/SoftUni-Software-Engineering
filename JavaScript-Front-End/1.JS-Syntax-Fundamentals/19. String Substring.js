function stringSubstring(word, text){
    text = text.toLowerCase()
    text = text.split(' ')
    if (text.includes(word)){
        console.log(word);

    }else {
        console.log(`${word} not found!`)
    }

}
stringSubstring('python',
'JavaScript is the best programming language')