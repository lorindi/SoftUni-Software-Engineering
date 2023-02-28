function validityChecker(x1, y1, x2, y2) {

    let firstNum = Number.isInteger(Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2)));
    let secondNum = Number.isInteger(Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2)));
    let thirdNum = Number.isInteger(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)));
    
    if (firstNum) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if (secondNum) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if (thirdNum) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(3, 0, 0, 4)


// This line of code calculates the distance between the point (x1, y1) and the origin (0, 0) using the Pythagorean theorem, and then checks if this distance is an integer by using the Number.isInteger() method.

// Here's how the calculation works step by step:

// (0 - x1) ** 2 calculates the square of the difference between the x-coordinate of the point and 0 (i.e., the x-coordinate of the origin).
// (0 - y1) ** 2 calculates the square of the difference between the y-coordinate of the point and 0 (i.e., the y-coordinate of the origin).
// Adding these two values together gives us the sum of the squares of the differences between the point and the origin: (0 - x1) ** 2 + (0 - y1) ** 2.
// Taking the square root of this value gives us the distance between the point and the origin: Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2).
// Finally, we use the Number.isInteger() method to check if this distance is an integer or not. The result of this check is assigned to the variable firstNum.
// So, the variable firstNum will be 1 if the distance between the point and the origin is an integer, and 0 if it is not an integer.