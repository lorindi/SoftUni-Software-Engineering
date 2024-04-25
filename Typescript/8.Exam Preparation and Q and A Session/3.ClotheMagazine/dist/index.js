"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Magazine_1 = require("./Magazine");
const Cloth_1 = require("./Cloth");
function main() {
    // Initialize the repository (Magazine)
    const magazine = new Magazine_1.Magazine("Zara", 20);
    // Initialize entity (Cloth)
    const cloth1 = new Cloth_1.Cloth("red", 36, "dress");
    // Print Cloth
    console.log(cloth1.toString());
    // Product: dress with size 36, color red
    // Add Cloth
    magazine.addCloth(cloth1);
    // Remove Cloth
    console.log(magazine.removeCloth("black")); // false
    const cloth2 = new Cloth_1.Cloth("brown", 34, "t-shirt");
    const cloth3 = new Cloth_1.Cloth("blue", 32, "jeans");
    // Add Cloth
    magazine.addCloth(cloth2);
    magazine.addCloth(cloth3);
    // Get smallest cloth
    const smallestCloth = magazine.getSmallestCloth();
    console.log(smallestCloth?.toString());
    // Product: jeans with size 32, color blue
    // Get Cloth
    const getCloth = magazine.getCloth("brown");
    // Product: t-shirt with size 34, color brown
    console.log(getCloth?.toString());
    console.log(magazine.report());
    // Zara magazine contains:
    // Product: jeans with size 32, color blue
    // Product: t-shirt with size 34, color brown
    // Product: dress with size 36, color red
}
main();
