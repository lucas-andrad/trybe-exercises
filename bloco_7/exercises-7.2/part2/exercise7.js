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
  
  
  function addTurn(object, key, value) {
    object[key] = value;
  }
  
  addTurn(lesson2, 'turno', 'manhã');
  
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  
  function countStudents(object) {
    let total = 0;
    const arr = Object.keys(object);
    for (i in array) {
      total += object[array[i]].numeroEstudantes;
    }
  }
  

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);