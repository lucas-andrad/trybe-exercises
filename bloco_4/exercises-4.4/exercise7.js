function maiorArray(array){
    let maior;
    for(let i = 0; i < array.length; i++){
        if (maior == undefined){
            maior = array.indexOf(array[i])
        }
        else{
            if (maior < array[i]){
                maior = array.indexOf(array[i])
            }
        }
    }

    return maior
}

testArray = [2, 3, 6, 7, 10, 1];

console.log(maiorArray(testArray))