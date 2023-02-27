function roadRadar(currentSpeed , area){
    let isTrue = false
    let speedLimit = 0
    let status = ''
    if (area == 'motorway'){
        if (currentSpeed <= 130){
            isTrue = true
 
        }
 
        speedLimit = 130

    }else if (area == 'interstate'){
        if (currentSpeed <= 90){
            isTrue = true
 
        }
   
        speedLimit = 90

    }else if (area == 'city'){
        if (currentSpeed <= 50){
            isTrue = true
 
        }

        speedLimit = 50

    }else if (area == 'residential'){
        if (currentSpeed <= 20){
            isTrue = true
 
        }
    
        speedLimit = 20

    }
    if (isTrue){
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);

    }else {
        let difference = Math.abs(speedLimit - currentSpeed)
        if (difference <= 20){
            status = 'speeding'
        }else if (difference <= 40){
            status = 'excessive speeding'
        }else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    
}
roadRadar(200, 'motorway')