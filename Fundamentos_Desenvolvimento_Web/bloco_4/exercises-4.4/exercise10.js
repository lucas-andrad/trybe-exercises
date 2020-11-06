function Somatorio(MaxValue){
    let result = 0;
    for (let i = 1; i <= MaxValue; i++){
        result = result + i
    }
    return result
}

console.log(Somatorio(5))