let button1 = document.querySelector(".tarefa1")
let button2 = document.querySelector(".tarefa2")
let img = document.querySelector(".image")
let price = 59.99
let discount = 0.30

button1.addEventListener("click", ()=>{
    alert("Você clicou no botão!")
})

button2.addEventListener("click", ()=>{
    alert(`Desconto de R$${price*discount}`)
})



img.addEventListener("mouseover", ()=>{
    img.src = "https://picsum.photos/200/300?grayscale"
})

img.addEventListener("mouseleave", ()=>{
    img.src = "https://picsum.photos/200/300"
})
