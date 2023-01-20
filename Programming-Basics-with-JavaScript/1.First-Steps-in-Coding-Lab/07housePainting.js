function housePainting(input) {
    let xHouse = Number(input[0]);
    let yHouse = Number(input[1]);
    let hRoof = Number(input[2]);
    let greenPaintArea = (xHouse * yHouse + xHouse * xHouse) * 2
    let redPaintArea = xHouse * yHouse * 2 + xHouse * hRoof / 2 * 2
    let windowArea = 1.2 * 2;
    let doorArea = 1.5 * 1.5 * 2;
    let totalGreenArea = greenPaintArea - windowArea - doorArea;
    let litersGreenPant = totalGreenArea / 3.4
    let litersRedPaint = redPaintArea / 4.3

    console.log(litersGreenPant.toFixed(2));
    console.log(litersRedPaint.toFixed(2));

}


housePainting(["6",
    "10",
    "5.2"
])