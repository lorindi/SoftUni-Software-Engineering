// function revealWords(string, sentence){
//     let result = string.split(', ')
//     let list = sentence.split(' ')
//     for (let i = 0; i <= result.length; i++){
//         let word = result.shift()
//         let wordstars = '*'.repeat(word.length)
//         for (let i = 0; i <= list.length; i++){
            
    
//             if (list[i] == wordstars){

//                 list[i] = word
//                 break;

//             }

//         }
//     }
 
//     console.log(list.join(' '));

// }
// revealWords('great',
// 'softuni is ***** place for learning new programming languages')
function revealWords(string, sentence){
    let result = string.split(', ')
    let list = sentence.split(' ')
    for (let el of result){
        for (let element of list){
            if (element.includes('*') && el.length == element.length){
                sentence = sentence.replace(element, el)
            }
        }
    }
    console.log(sentence);
}
revealWords('great',
'softuni is ***** place for learning new programming languages')