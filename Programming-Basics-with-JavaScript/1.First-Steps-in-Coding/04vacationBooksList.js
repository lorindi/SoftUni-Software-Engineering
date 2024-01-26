function requiredReading(input){
    let numberOfPages = Number(input[0])
    let pages = Number(input[1])
    let numberOfDays  = Number(input[2])
    let totalTime = numberOfPages / pages
    let requiredHoursPerDay = totalTime / numberOfDays
    console.log(requiredHoursPerDay)
}
requiredReading([" 212 ", "20 ", "2 "]);