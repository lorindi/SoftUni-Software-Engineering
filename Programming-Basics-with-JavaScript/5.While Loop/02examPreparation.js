function examPreparation(input){
    let numberOfProblems = 0
    let poorGrades = 0
    let averageScore = 0
    
    let lastProblem = ''
    let poorGradesCondition = false
    
    let index = 0
    let unsatisfactoryGrades = Number(input[index])
    index++
    while (poorGrades <= unsatisfactoryGrades){
        let name = input[index]
        index++ 
        if (name === 'Enough'){
            break
        }
        let grade = Number(input[index])
        index++
        
        averageScore += grade
        lastProblem = name

        if (grade <= 4){
            poorGrades += 1
        }else{
            numberOfProblems += 1
        }
        

        if (poorGrades == unsatisfactoryGrades){
            poorGradesCondition = true
            break
        }

    }
    if (poorGradesCondition){
        console.log(`You need a break, ${poorGrades} poor grades.`)

    }else {
        console.log(`Average score: ${(averageScore / (poorGrades + numberOfProblems)).toFixed(2)}`)
        console.log(`Number of problems: ${poorGrades + numberOfProblems}`)
        console.log(`Last problem: ${lastProblem}`)
    }

}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

