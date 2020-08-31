let n = 7
let c = n - 1
let e = n - 2;

if (n > 1){
    for(let i = 0; i < n - 2; i++){
        console.log(" ".repeat(e) + "*".repeat(n-c))
        e = e - 1
        c = c - 2
    }
}