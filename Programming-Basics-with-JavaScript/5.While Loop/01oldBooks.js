function oldBooks(input){
    let i = 0
    let checkedBooks = 0
    let isValid = false
    let books = input[i]
    i++
    let currentBooks = input[i]
    i++
    while (currentBooks !== 'No More Books'){
        checkedBooks += 1
        if (currentBooks == books){
            checkedBooks -= 1
            isValid = true
            break
        }
        
        currentBooks = input[i]
        i++
        
    }
    if (isValid){
        console.log(`You checked ${checkedBooks} books and found it.`)
    }else{
        console.log(`The book you search is not here!\nYou checked ${checkedBooks} books.`
        )

    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



