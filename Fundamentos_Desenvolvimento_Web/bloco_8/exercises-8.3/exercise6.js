const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  return alunos.reduce((previousValue, currentValue, index) => {
    const average = notas
      .find((value, index2) => index === index2)
      .reduce((acumulator, curr) => (acumulator += curr / 5), 0);
    return previousValue.concat({
      name: currentValue,
      average: average.toFixed(2),
    });
  }, []);
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);
