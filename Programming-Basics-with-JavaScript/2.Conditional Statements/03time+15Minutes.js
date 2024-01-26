function time(input){
    let hour = Number(input[0])
    let minutes = Number(input[1])
    let addMinutes = 15
    if (hour <= 23){
        minutes += addMinutes
        if (minutes > 59){
            hour += 1
            if (hour === 24){
                hour = 0
            }
            minutes -= 60
            if (minutes > 9){
                console.log(`${hour}:${minutes}`)
            }
            else{
                console.log(`${hour}:0${minutes}`)
            }
        }else {
            console.log(`${hour}:${minutes}`)
        } 
    }
}
time(["23", "59"])