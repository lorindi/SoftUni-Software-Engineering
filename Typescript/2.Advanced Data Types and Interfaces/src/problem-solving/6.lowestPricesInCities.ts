function lowestPricesInCities(list: string[]): void {
    const lowestPrices: { [key: string]: { town: string, price: number } } = {};

    for (let line of list) {
        const [townName, productName, productPriceStr] = line.split(" | ");
        const productPrice = parseFloat(productPriceStr);

        if (!(productName in lowestPrices) || productPrice < lowestPrices[productName].price) {
            lowestPrices[productName] = { town: townName, price: productPrice };
        }
    }

    for (const productName in lowestPrices) {
        console.log(`${productName} -> ${lowestPrices[productName].price} (${lowestPrices[productName].town})`);
    }
}

lowestPricesInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
