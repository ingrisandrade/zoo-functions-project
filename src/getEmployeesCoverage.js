const { employees, species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

// Esta função será responsável por associar informações de cobertura das pessoas funcionárias.

const retorno = employees.map((elem) => {
  const object = {
    id: elem.id,
    fullName: `${elem.firstName} ${elem.lastName}`,
    species: elem.responsibleFor.map(
      (respons) => species.find((search) => search.id === respons).name,
    ),
    locations: elem.responsibleFor.map(
      (respons) => species.find((search) => search.id === respons).location,
    ),
  };
  return object;
});

function getEmployeesCoverage(idRespons = retorno) {
  // const idRespons = retorno;
  if (idRespons.id || idRespons.name) {
    const object = retorno.find((searchRespons) => searchRespons.fullName.includes(idRespons.name) || searchRespons.id === idRespons.id);
    if (!object) {
      throw new Error('Informações inválidas');
    }
    return object;
  }
  return idRespons;
}

// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
