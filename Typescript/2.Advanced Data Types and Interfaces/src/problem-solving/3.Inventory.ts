type heroesObjTypes = {
  [key: string]: {
    level: string;
    items: string[];
  };
};

function inventory(array: string[]): void {
  const heroesObj: heroesObjTypes = {};
  for (let hero of array) {
    const [name, level, itemsStr] = hero.split(" / ");
    const items = itemsStr.split(", ");
    heroesObj[name] = { level, items };
  }
  const sortedHeroes = Object.fromEntries(
    Object.entries(heroesObj).sort(
      ([, heroA], [, heroB]) => parseInt(heroA.level) - parseInt(heroB.level)
    )
  );
  for (const [hero, { level, items }] of Object.entries(sortedHeroes)) {
    console.log(`Hero: ${hero}`);
    console.log(`level => ${level}`);
    console.log(`items => ${items.join(", ")}`);
    console.log(); // Add empty line for separation
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
