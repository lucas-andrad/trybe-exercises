function fatorial(number) {
  let result = number;
  for (let i = number-1; i > 0; i -= 1) {
      result = result * i
  }
  return result
}

console.log(fatorial(4))
