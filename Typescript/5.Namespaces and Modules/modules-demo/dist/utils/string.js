"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = void 0;
const capitalizeFirstLetter = (input) => {
    const firstLetter = input.charAt(0).toUpperCase();
    const theRestLetters = input.slice(1);
    return `${firstLetter}${theRestLetters}`;
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
