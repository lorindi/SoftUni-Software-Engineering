function walking(input){
    let isValid = false
    let goal = 10000
    let index = 0
    let totalSteps = 0
    let steps = input[index]
    

    while (true){
        if (steps == 'Going home'){
            steps = Number(input[index + 1])
            totalSteps += steps
            index = index + 2
            if (totalSteps >= goal){
                isValid = true
                break
            }
        }else{
            steps = Number(input[index])
        
            totalSteps += steps
            index++
            if (totalSteps >= goal){
                isValid = true
                break
            }

        }
        
        
    }

    if (isValid){
        console.log(`Goal reached! Good job!`)
        console.log(`${totalSteps} steps over the goal!`)
    }else{
        console.log(`${Math.abs(goal - totalSteps)} more steps to reach goal.`)
    }
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

