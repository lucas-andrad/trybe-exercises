n = 3
let c = n-1

if (n > 1){
    for(let i = 0; i < n; i++){
        console.log("*".repeat(n-c))
        c = c - 1
    }
}