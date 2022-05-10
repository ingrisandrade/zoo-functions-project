const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName, // Vírgula adicionada pelo es lint
  ); // Return formatado pelo es lint devido a extensão exceder o comprimento 100.
}

// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
