function createHeroesRegister(data) {
  let heroes = [];

  for (let i = 0; i < data.length; i++) {
    let [name, level, items] = data[i].split(" / ");
    level = Number(level);

    items = items.length > 0 ? items.split(", ") : [];

    heroes.push({
      name: name,
      level: level,
      items: items,
    });
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  }
}
createHeroesRegister([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

// // -------------------------------
function inventory(input) {
  let heroes = [];

  for (const heroInfo of input) {
    let [hero, level, items] = heroInfo.split(" / ");
    heroes.push({ hero, level, items });
  }

  sortedHeroes = [...heroes].sort((a, b) => {
    return a.level - b.level;
  });

  for (const { hero, level, items } of sortedHeroes) {
    console.log(`Hero: ${hero}`);
    console.log(`level => ${level}`);
    console.log(`items => ${items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

















































