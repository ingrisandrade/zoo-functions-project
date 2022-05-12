const data = require('../data/zoo_data');

/* Esta função irá receber um array de visitantes no seguinte formato:

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
*/

/* Critérios:
- Pessoas com idade menor que 18 anos são classificadas como crianças (child);
- Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
- Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior). */

function countEntrants(entrants) {
  let children = 0;
  let adults = 0;
  let seniors = 0;
  children = entrants.filter((entrada) => entrada.age < 18).length;
  adults = entrants.filter(
    (entrada) => entrada.age >= 18 && entrada.age < 50,
  ).length;
  seniors = entrants.filter((entrada) => entrada.age >= 50).length;

  // O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.

  return { child: children, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }

  if (typeof entrants === 'object' && Object.keys(entrants).length === 0) {
    return 0;
  }

  const totalEntrants = countEntrants(entrants);
  return (
    totalEntrants.child * 20.99
    + totalEntrants.adult * 49.99
    + totalEntrants.senior * 24.99
  );
}

// console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
