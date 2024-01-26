function minNumber(input){
    let minNum = 999999999
    let index = 0
    let command = input[index]
    index++
    while (command != 'Stop'){
        number = Number(command)
        if (minNum > number){
            minNum = number

        }
        command = input[index]
        index++


    }
    console.log(minNum)



}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])

