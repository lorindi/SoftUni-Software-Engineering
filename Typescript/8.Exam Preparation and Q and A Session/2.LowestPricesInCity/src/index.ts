const inputData: string[] = [
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 3",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 1",
  "Sofia | Orange | 2",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
];

// Output
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)

type TownPriceMap = {
  [townName: string]: number;
};

type ResultType = {
  [key: string]: TownPriceMap;
};

function solve(input: string[]): void {
  const result = {} as ResultType;

  for (const line of input) {
    const [town, product, price] = line.split(" | ");
    if (!result[product]) {
      result[product] = {};
    }

    const currentPrice = Number(price);
    if (!result[product][town]) {
      result[product][town] = currentPrice;
    } else {
      if (result[product][town] > currentPrice) {
        result[product][town] = currentPrice;
      }
    }
  }

  const tuples = Object.entries(result);

  for (const [product, townsWithPriceMap] of tuples) {
    const townPriceTuples = Object.entries(townsWithPriceMap);

    const sorted = townPriceTuples.sort((a, b) => {
      return a[1] - b[1];
    });
    const [town, price] = sorted[0];
    console.log(`${product} -> ${price} (${town})`);
  }
}

solve(inputData);
