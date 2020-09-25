function LongestWord(str) {
  let maxlength = 0;
  let longest;
  let letters;
  list = str.split(' ');
  for (let i = 0; i < list.length; i += 1) {
    letters = list[i].split('');
    if (letters.length > maxlength) {
      longest = list[i];
    }
  }
  return longest;
}

console.log(
  LongestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);
