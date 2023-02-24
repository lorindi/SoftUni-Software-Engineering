function countStringOccurrences(sentence, word){
    let counter = 0
    let result = sentence.split(" ");
    for (const el of result){
        if (el == word){
            counter++

        }

    }
    console.log(counter);

}
countStringOccurrences('This is a word and it also is a sentence',
'is')