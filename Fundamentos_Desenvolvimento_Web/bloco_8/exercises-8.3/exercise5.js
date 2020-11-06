const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce((acumulator, currentValue) => {
    currentValue.split('').map((letter) => {
      if (letter.toLowerCase() === 'a') {
        acumulator += 1;
      }
    });
    return acumulator;
  }, 0);
}

assert.deepEqual(containsA(), 20);
