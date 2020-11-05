let arr = []
let by2 = []

for (let i = 1; i < 26; i++){
    arr.push(i)
}

for (i of arr){
    by2.push(i/2)
}

console.log(by2)