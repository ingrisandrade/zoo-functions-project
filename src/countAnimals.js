const data = require("../data/zoo_data");

// contabiliza a quantidade de animais de cada espécie.
function countAnimals(animal) {
  const totalAnimals = {};
  if (!animal) {
    data.species.forEach((specie) => {
      totalAnimals[specie.name] = specie.residents.length;
    });
    return totalAnimals;
  }
  if (Object.keys(animal).length === 1) {
    return data.species.find((specie) => animal.specie === specie.name).residents.length;
  }
  return data.species.find((specie) => animal.specie === specie.name).residents.filter((resident) => resident.sex === animal.sex).length;
}

console.log(countAnimals());

module.exports = countAnimals;
