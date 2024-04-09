function cats(array: string[]): void {
  array.forEach((catInfo) => {
    const [cat, age] = catInfo.split(" ");
    console.log(`${cat}, age ${age} says Meow`);
  });
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
