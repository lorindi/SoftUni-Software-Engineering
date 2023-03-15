function addressBook(array){

    let obj = {}
    for (let el of array){
        el = el.split(':')
        key = el[0]
        if (!(obj.hasOwnProperty(key))){
            obj[el[0]] = el[1]
           

        }else {
            delete obj[el[0]]
            obj[el[0]] = el[1]
        }
        
    }
    for (const key of Object.keys(obj).sort()){
        console.log(`${key} -> ${obj[key]}`)
    }

}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])