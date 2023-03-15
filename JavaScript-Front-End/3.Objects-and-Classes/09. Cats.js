function cats(array){

    let obj = {}
    for (let el of array){
        el = el.split(' ')
        key = el[0]
        obj[el[0]] = el[1]
         
        
    }
    for (const [key, value] of Object.entries(obj)){
        console.log(`${key}, age ${value} says Meow`)
    }

}
cats(['Mellow 2', 'Tom 5'])