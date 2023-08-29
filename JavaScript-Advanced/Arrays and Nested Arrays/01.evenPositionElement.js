function evenPositionElement(array){
 
    let result = array.filter((_, index) => index % 2 == 0)
    console.log(result.join(' '));

}
evenPositionElement(['20', '30', '40', '50', '60'])