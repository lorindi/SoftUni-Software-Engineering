const uniqid = require('uniqid')
const cubes = [];

exports.getAll = () => cubes.slice();

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
