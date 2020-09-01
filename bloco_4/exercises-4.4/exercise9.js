function arrayRepetido(array){
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in array) {
      let verificaNumero = array[index];
      for (let index2 in array) {
        if (verificaNumero === array[index2]) {
          contNumero++;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return array[indexNumeroRepetido];
}

testArray = [2, 3, 2, 5, 8, 2, 3];

console.log(arrayRepetido(testArray))