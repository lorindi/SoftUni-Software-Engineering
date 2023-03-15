function storeProvision(stock, ordered) {
  let obj = {};
  for (let el = 0; el < stock.length; el += 2) {
    if (!obj.hasOwnProperty(stock[el])) {
      obj[stock[el]] = 0;
    }
    obj[stock[el]] += Number(stock[el + 1]);
  }
  for (let el = 0; el < ordered.length; el += 2) {
    if (!obj.hasOwnProperty(ordered[el])) {
      obj[ordered[el]] = 0;
    }
    obj[ordered[el]] += Number(ordered[el + 1]);
  }
  for (const [key, value] of Object.entries(obj))
    console.log(`${key} -> ${value}`);
}
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
// ---------- Solution 2 ----------


function storeProvision(stock, ordered) {
  let products = [...stock, ...ordered];
  let storeProducts = {};
  for (let i = 0; i < products.length; i += 2) {
    if (!(products[i] in storeProducts)) {
      storeProducts[products[i]] = 0;
    }
    storeProducts[products[i]] += Number(products[i + 1]);
  }

  for (const key in storeProducts) {
    console.log(`${key} -> ${storeProducts[key]}`);
  }
}
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
