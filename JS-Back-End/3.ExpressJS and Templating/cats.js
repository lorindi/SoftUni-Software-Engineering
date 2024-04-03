const cats = [];
exports.addCat = (name, age) => {
  cats.push({ name, age });
};
exports.getCats = () => cats.slice()
