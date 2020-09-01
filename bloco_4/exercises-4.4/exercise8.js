function menorArray(array){
    let menor;
    for(let i = 0; i < array.length; i++){
        if (menor == undefined){
            menor = array.indexOf(array[i])
        }
        else{
            if (menor > array[i]){
                menor = array.indexOf(array[i])
            }
        }
    }

    return menor
}

testArray = [2, 4, 6, 7, 10, 0, -3];

console.log(menorArray(testArray))