function isPalindromo(string){
    if (string.split("").reverse().join("") === string){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindromo("arara"))

console.log(isPalindromo("avestruz"))
