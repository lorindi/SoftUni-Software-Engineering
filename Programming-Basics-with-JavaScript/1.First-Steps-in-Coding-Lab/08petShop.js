function petShop(input){
    let numberOfPackagesOfDogFood = Number(input[0])
    let numberOfPackagesOfCatFood = Number(input[1])
    let totalSum = (numberOfPackagesOfDogFood * 2.50) + (numberOfPackagesOfCatFood * 4)
    console.log(totalSum)
}
petShop(["5 ",
"4 "]
)