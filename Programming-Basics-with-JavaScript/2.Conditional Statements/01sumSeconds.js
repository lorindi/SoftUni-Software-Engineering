function  sumSeconds(input){
    let firstSeconds = Number(input[0])
    let secondSeconds = Number(input[1])
    let thirdSeconds = Number(input[2])
    let totalTime = firstSeconds + secondSeconds + thirdSeconds
    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    } else {
        (console.log(`${minutes}:${seconds}`))
    } 
}
sumSeconds(["35",
"45",
"44"])
