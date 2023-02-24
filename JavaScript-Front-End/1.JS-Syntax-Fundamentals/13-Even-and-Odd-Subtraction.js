function evenAndOddSubtraction(array){
    let even = 0;
    let odd = 0;
    for (const el of array){
        if (el % 2 == 0){
            even += el;

        }else {
            odd += el;
        }

    }
    console.log(even - odd);


}
evenAndOddSubtraction([3,5,7,9])