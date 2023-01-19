function studyMaterials(input){
    let packageOfChemicals = Number(5.80)
    let packOfMarkers = Number(7.20)
    let detergent = Number(1.20)
    
    let numberOfChemicalPackets = Number(input[0])
	let numberOfTagPackets = Number(input[1])
	let litersBoardCleaner = Number(input[2])
	let percentReduction = Number(input[3])

    let priceOfTheChemicalPackages = numberOfChemicalPackets * packageOfChemicals 
    let priceOfTagPacks = numberOfTagPackets * packOfMarkers
    let priceOfThePreparation = litersBoardCleaner * detergent
    let priceForAllMaterials = priceOfTheChemicalPackages + priceOfTagPacks + priceOfThePreparation
    let discountPrice =  priceForAllMaterials - (priceForAllMaterials * 0.25)
    console.log(discountPrice)
}
studyMaterials(["2 ", "3 ", "4 ", "25 "])