function meetings(array){
    let obj = {}
    for (let el of array){
        el = el.split(' ')
        key = el[0]
        if (!(obj.hasOwnProperty(key))){
            obj[el[0]] = el[1]
            console.log(`Scheduled for ${key}`)

        }else {
            console.log(`Conflict on ${key}!`)
        }
        
    }
    for (const [key, value] of Object.entries(obj)){
        console.log(`${key} -> ${value}`)
    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])