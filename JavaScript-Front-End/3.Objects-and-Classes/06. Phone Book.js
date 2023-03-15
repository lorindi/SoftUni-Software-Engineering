function phoneBook(array){
    let obj = {}
    for (let el of array){
        el = el.split(' ')
        obj[el[0]] = el[1]
    }
    for (const [key, value] of Object.entries(obj)){
        console.log(`${key} -> ${value}`)
    }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])