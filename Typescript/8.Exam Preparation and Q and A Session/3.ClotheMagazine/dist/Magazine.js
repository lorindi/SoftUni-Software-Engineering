"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const index = this.clothes.findIndex((c) => c.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSortedClothes() {
        const sorted = this.clothes.sort((a, b) => a.size - b.size);
        return sorted;
    }
    getSmallestCloth() {
        if (!this.clothes.length) {
            return {};
        }
        if (this.clothes.length === 1) {
            return this.clothes[0];
        }
        const smallestCloth = this.getSortedClothes()[0];
        return smallestCloth;
    }
    getCloth(color) {
        const cloth = this.clothes.find((c) => c.color === color);
        return cloth;
    }
    getClothCount() {
        const count = this.clothes.length;
        return count;
    }
    report() {
        //
        const sorthClothes = this.getSortedClothes();
        const clothesForReport = sorthClothes.map((c) => c.toString()).join("\n");
        const report = `${this.type} magazine contains:\n${clothesForReport}`;
        return report;
    }
}
exports.Magazine = Magazine;
