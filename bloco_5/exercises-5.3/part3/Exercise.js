let cat = document.querySelector("img")
let counter = 0


function catWalk(){
        cat.style.left = counter + "px"
        console.log("oi")
        counter += 10
}

window.setInterval(catWalk, 50)


  
