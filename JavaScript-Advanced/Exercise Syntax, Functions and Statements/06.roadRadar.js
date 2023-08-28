function roadRadar(speed, area){
    let areas = {'motorway': 130, 'interstate': 90, 'city': 50, 'residential': 20}
    let difference = Math.abs(areas[area] - speed)
    function status(difference){
        let status = ''
        if (difference <= 20){
            status = 'speeding'

        }else if (difference <= 40){
            status = 'excessive speeding'

        } else {
            status = 'reckless driving'
        }
        return status

    }
    if (areas[area] < speed){
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areas[area]} - ${status(difference)}`);

    }else {
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`);
    }
}
roadRadar(20, 'motorway')