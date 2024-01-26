function celsiusToFahrenheit(input) {
    let tC = Number(input[0]);
    let tF = tC * 1.8 + 32

    console.log(tF.toFixed(2));

    // T (° F) = T (° C) × 1,8 + 32

}

celsiusToFahrenheit(["25"])