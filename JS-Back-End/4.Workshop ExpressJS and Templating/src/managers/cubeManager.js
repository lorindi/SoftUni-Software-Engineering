const uniqid = require("uniqid");
const cubes = [
  {
    id: "1zr5n3oluoeuu1r",
    name: "Mirror Cube",
    description: "A cool mirror cube",
    imageUrl: "https://i.ebayimg.com/images/g/gaEAAOSwFHdi3mXg/s-l1200.webp",
    difficultyLevel: 4,
  },
  {
    id: "3zr5n3oluoeuu1n",
    name: "Rubik Classic",
    description: "Evergreen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqnZ9UHC9Fe7eGDzeKFu1JYyMq8m62MT8Vc32_iHmyg&s",
    difficultyLevel: 3,
  },
];

exports.getAll = () => cubes.slice();
exports.getOne = (cubeId) => cubes.find((x) => x.id == cubeId);
exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    // id: cubes.length + 1,
    // id: (new Date()).getTime(),
    ...cubeData,
  };
  cubes.push(newCube);
  return cubeData;
};
