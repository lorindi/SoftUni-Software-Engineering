function tennisRanklist(input){
    let numberOfTournaments = Number(input[0])
    let startingNumberOfPoints = Number(input[1])
    let data = startingNumberOfPoints
    let w = 0
    for (let i = 2; i <= numberOfTournaments + 1; i++){
        let command = input[i]
        if (command == 'W'){
            w += 1
            data += 2000
        }else if (command == 'F'){
            data += 1200
            
        }else if (command == 'SF'){
            data += 720
        }
    }
    let averagePointsEarned = (data - startingNumberOfPoints) / numberOfTournaments
    let numberOfTournamentsWon = w
    let percentageOfTournamentsWon = (numberOfTournamentsWon / numberOfTournaments) * 100
    console.log(`Final points: ${data.toFixed(0)}`)
    console.log(`Average points: ${Math.floor(averagePointsEarned)}`)
    console.log(`${percentageOfTournamentsWon.toFixed(2)}%`)
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])



