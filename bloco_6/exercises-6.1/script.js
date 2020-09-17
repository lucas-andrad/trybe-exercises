const arr = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Distrito Federal"];
const options = document.querySelector("#options");
const form = document.querySelector("#formulario").elements
const labels = document.querySelectorAll("label")

console.log(form)

for (let i = 0; i < arr.length; i += 1) {
  let option = document.createElement("option")
  option.innerText = arr [i]
  options.appendChild(option)  
}

