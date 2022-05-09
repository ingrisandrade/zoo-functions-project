const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = species.find((specie) => specie.name.includes(animal));
  return especie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
