const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

console.log(lesson2);

function addTurn(object, key, value) {
  object[key] = value;
}

addTurn(lesson2, 'turno', 'manhã');

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
