function printEveryNThElementFromAnArray(list, num){
    let result = []
    for (let i = 0; i < list.length; i += num){
        
        result.push(list[i])

    }
    return result
   
    

}
printEveryNThElementFromAnArray(['dsa',
'asd', 
'test', 
'tset'], 
2)