function graduation(input){
    let idx = 0
    let i = 1
    let correction = 0
    let boolTrue = true
    let sumGrades = 0
    let name = input[idx]
    idx++
    let grade = input[idx]
    idx++
    while (i <= 12){
        grade = Number(grade)
        if (grade < 4){
            correction += 1
            if(correction < 1){
                continue
            }else {
                boolTrue = false
                break
            }
            
        }
        sumGrades += grade
        grade = input[idx]
        idx++
        i++
    }
    
    if (boolTrue){
        console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`)
    }else {
        console.log(`${name} has been excluded at ${i} grade`)
    }

}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])


