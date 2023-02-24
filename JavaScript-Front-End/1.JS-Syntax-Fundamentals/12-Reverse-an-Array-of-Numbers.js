function reverseAnArrayOfNumbers(num,array){
    
    console.log(array.slice(0,num).reverse().join(' '));

}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])