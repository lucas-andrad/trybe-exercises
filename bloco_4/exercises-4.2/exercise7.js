let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let min; 

for (let i = 0; i < numbers.length; i++){
  if (min == undefined){
      min = numbers[i]
  }
  else if (numbers[i] < min){
    min = numbers[i]
  }
}

console.log(min)