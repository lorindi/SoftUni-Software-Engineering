function circleAreaAndPerimeter(input) {
    let r = Number(input[0]);
    let area = Math.PI * Math.pow(r, 2)
    let perimeter = Math.PI * 2 * r

    console.log(`${area.toFixed(2)}\n${perimeter.toFixed(2)}`);

}

circleAreaAndPerimeter(["3"])