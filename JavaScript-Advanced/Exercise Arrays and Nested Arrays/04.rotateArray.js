function rotateArray(list, number){
    for (let i = 0; i < number; i++){
        list.unshift(list.pop())

    }
    console.log(list.join(' '));

}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)