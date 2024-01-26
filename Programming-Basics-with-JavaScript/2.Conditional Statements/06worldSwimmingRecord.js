function worldSwimmingRecord(input){
    let recordSeconds = Number(input[0])
    let distanceInMeters = Number(input[1])
    let timeInSeconds = Number(input[2])

    let distanceSwum = distanceInMeters * timeInSeconds
    let fifteenM = Math.floor(distanceInMeters / 15) * 12.5

    let totalTime = distanceSwum + fifteenM
    
    if (recordSeconds <= totalTime){
        console.log(`No, he failed! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])

