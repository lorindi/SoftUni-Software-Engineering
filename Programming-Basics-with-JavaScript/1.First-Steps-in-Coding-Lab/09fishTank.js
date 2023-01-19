function aquarium(input){
    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percentage = Number(input[3])
    let aquariumVolume = length * width * height
    let volumeInLiters = aquariumVolume / 1000
    let occupiedSpace =  percentage * 0.01
    let litersNeeded = volumeInLiters * (1 - occupiedSpace)
    console.log(litersNeeded)
}
aquarium(["85 ", "75 ", "47 ", "17 "])