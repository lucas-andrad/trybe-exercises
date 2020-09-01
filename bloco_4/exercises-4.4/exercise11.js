function stringEnd(word, end){
    let inversoPalavra = word.split("").reverse().join("");
    let inversoFimPalavra = end.split("").reverse().join("");
  
    for (let i = 0; i < inversoFimPalavra.length; i += 1) {
      if (inversoPalavra[i] != inversoFimPalavra[i]) {
        return false;
      } else {
        return true;
      }
    }
}

console.log(stringEnd("trybe", "be"))

console.log(stringEnd("joaofernando", "fernan"))