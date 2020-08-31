n = 5
let c = n-1

if (n > 1){
    for(let i = 0; i < n; i++){
        console.log(" ".repeat(c) + "*".repeat(n-c))
        c = c - 1
    }
}