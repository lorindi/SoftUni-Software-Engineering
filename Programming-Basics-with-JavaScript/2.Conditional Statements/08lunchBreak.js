function lunchBreak(input){
    let name = String(input[0])
    let episodeDuration = Number(input[1])
    let restDuration = Number(input[2])
    let lunch = restDuration / 8
    let rest = restDuration / 4
    let totalTime = episodeDuration + lunch + rest
    if (restDuration >= totalTime){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(restDuration - totalTime)} minutes free time.`)
    }else{
        diff = Math.abs(totalTime - restDuration)
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])

