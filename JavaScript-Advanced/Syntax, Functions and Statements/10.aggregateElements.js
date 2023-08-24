function aggregateElement(input) {
    console.log(input.reduce((accumolator, currentValue) => accumolator + currentValue, 0));
    console.log(input.reduce((accumulator, currentValue) => accumulator + 1 / currentValue, 0));
    console.log(input.join(''));

}
aggregateElement([1, 2, 3])