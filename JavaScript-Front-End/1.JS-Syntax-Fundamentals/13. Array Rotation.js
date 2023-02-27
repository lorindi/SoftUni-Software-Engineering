function arrayRotation(array, count){
    for (let i = 0; i < count; i++){
        
        array.push(array.shift())
    }
    console.log(array.join(' '));

}
arrayRotation([32, 21, 61, 1], 4)