const data = require('../data/zoo_data');

// A função animal dias recebe animal e os dias da semana que ele está disponível
function animalDias(animal) {
  return data.species.find((anim) => anim.name === animal).availability;
}

// A função diaHorarios recebe o dia e retorna o horário de funcionamento em que os animais irão se apresentar naquele dia.
function diaHorarios(day) {
  const apresentacao = data.species.filter((animal) => animal.availability.includes(day))
    .map((anim) => anim.name);

  const { open, close } = data.hours[day];

  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }

  return { [day]: {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: apresentacao },
  };
}

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function withoutParameter() {
  return week.reduce((acc, dia) => Object.assign(acc, diaHorarios(dia)), {});
}

function getSchedule(scheduleTarget) {
  const nomeAnimal = data.species.map((animal) => animal.name);
  if (week.includes(scheduleTarget)) { return diaHorarios(scheduleTarget); }
  if (nomeAnimal.includes(scheduleTarget)) { return animalDias(scheduleTarget); }
  return withoutParameter();
}

module.exports = getSchedule;
