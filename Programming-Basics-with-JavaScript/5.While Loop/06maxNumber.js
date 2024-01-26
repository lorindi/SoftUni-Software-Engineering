function maxNumber(input){
    let maxNumber = -999999999
    let index = 0
    let command = input[index]
    index++
    while (command != 'Stop'){
        number = Number(command)
        if (maxNumber < number){
            maxNumber = number

        }
        command = input[index]
        index++


    }
    console.log(maxNumber)



}
maxNumber(["45",
"-20",
"7",
"99",
"Stop"])

