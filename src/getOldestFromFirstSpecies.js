const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

function getOldestFromFirstSpecies(id) {
  //
  const getSpecie = employees.find((elem) => elem.id === id).responsibleFor[0];
  const getResidents = species.find(
    (specieAnimal) => specieAnimal.id === getSpecie, // vírgula adicionada na formatação
  ).residents;
  const getOldest = getResidents.reduce((older, animal) =>
    (older.age > animal.age ? older : animal), // vígula adicionada na formatação
  );
  return [getOldest.name, getOldest.sex, getOldest.age];
}

console.log(getOldestFromFirstSpecies);

module.exports = getOldestFromFirstSpecies;
