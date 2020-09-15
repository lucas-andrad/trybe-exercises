let squareInput = document.getElementById("square-input")
let halfInput = document.getElementById("half-input")
let FirstPercent = document.getElementById("percent1-input")
let SecondPercent = document.getElementById("percent2-input")
let AreaInput = document.getElementById("area-input")

let squareButton = document.getElementById("square-button")
let halfButton = document.getElementById("half-button")
let percentButton = document.getElementById("percent-button")
let areaButton = document.getElementById("area-button")

let solution = document.getElementById("solution")

function Square(num){
    let squared = num * num
    return "The result of " + num + " squared is " + squared
}

function Half(num){
    let divided = num/2
    return "The half of " + num + " is " + divided
}

function percent(num1, num2){
    let percentage = (num1/num2) * 100
    return num1 + " is " + percentage + "% " + "of " + num2
}

function CircleArea(radius){
    let area = Math.PI * Square(radius)
    return "The area of circle with radius " + radius + " is " + area
}

squareButton.addEventListener("click", ()=>{
    solution.innerHTML = Square(squareInput.value)
})

halfButton.addEventListener("click", ()=>{
    solution.innerHTML = Half(halfInput.value)
})

percentButton.addEventListener("click", ()=>{
    solution.innerHTML = percent(FirstPercent.value, SecondPercent.value)
})

areaButton.addEventListener("click", ()=>{
    solution.innerHTML = CircleArea(AreaInput.value)
})
