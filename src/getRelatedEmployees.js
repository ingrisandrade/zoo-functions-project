const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employ) => employ.managers.includes(id));
  // verifica se uma pessoa colaboradora é gerente ou não.
}

// A função abaixo utiliza a função acima para apresentar os resultados contidos nos comentários abaixo.
function getRelatedEmployees(managerId) {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    // Erro gerado se a pessoa colaboradora não for gerente.
  }
  const manager = employees.filter((employ) => employ.managers.includes(managerId));
  return manager.map((manage) => `${manage.firstName} ${manage.lastName}`);
  // Se for a pessoa for gerente retorna um array contendo os nomes das pessoas colaboradoras que ela é responsável.
}

module.exports = { isManager, getRelatedEmployees };
