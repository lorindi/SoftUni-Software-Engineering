function listOfNames(array){
    let result = array.sort((a, b) => a.localeCompare(b))
    result.forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    })

}
listOfNames(["John", "Bob", "Christina", "Ema"])