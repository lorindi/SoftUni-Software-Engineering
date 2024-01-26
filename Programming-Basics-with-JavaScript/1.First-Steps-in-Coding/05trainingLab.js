function trainingLab(input) {
    let length = Number(input[0]);
    let wigth = Number(input[1]);
    let numberOfRows = Math.floor(length / 1.2);
    let numberOfDesks = Math.floor((wigth - 1) / 0.7);
    let totalNumberOfDesks = numberOfDesks * numberOfRows - 3
    console.log(totalNumberOfDesks)
}

trainingLab(["15", "8.9"])