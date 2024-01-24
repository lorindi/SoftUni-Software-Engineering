function trekkingMania(input){
    let n = Number(input[0])
    let numberOfPeople = 0
    let musala = 0
    let montBlanc = 0
    let kilimanjaro = 0
    let k2 = 0
    let everst = 0
    for (let i = 1; i <= n; i++){
        people = Number(input[i])
        numberOfPeople += people
        if(people <= '5'){
            musala += people
        }else if(people <= '12'){
            montBlanc += people
        }else if(people <= '25'){
            kilimanjaro += people
        }else if(people <= '40'){
            k2 += people
        }else if(people > '40'){
            everst += people
        }
    }
    
    console.log(`${(musala / numberOfPeople * 100).toFixed(2)}%`)
    console.log(`${(montBlanc / numberOfPeople * 100).toFixed(2)}%`)
    console.log(`${(kilimanjaro / numberOfPeople * 100).toFixed(2)}%`)
    console.log(`${(k2 / numberOfPeople * 100).toFixed(2)}%`)
    console.log(`${(everst / numberOfPeople * 100).toFixed(2)}%`)
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

