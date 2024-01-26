function rojectsCreation(input){
    let architect = String(input[0])
    let numberOfProjects = Number(input[1])
    let result = numberOfProjects * 3
    console.log(`The architect ${architect} will need ${result} hours to complete ${numberOfProjects} project/s.`)

} 
rojectsCreation(["George ",
"4 "]
)