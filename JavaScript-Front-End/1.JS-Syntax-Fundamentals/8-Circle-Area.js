function circleArea(input){
  

    if (typeof input === 'number'){
        console.log((Math.PI * input**2).toFixed(2))
       

    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }

}
circleArea(5)
circleArea('name')