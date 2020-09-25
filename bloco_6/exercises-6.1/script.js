const arr = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Distrito Federal"];
const options = document.querySelector("#options");
const form = document.querySelector("#formulario").elements
const labels = document.querySelectorAll("label")
const result = document.getElementById('result')


for (let i = 0; i < arr.length; i += 1) {
  let option = document.createElement("option");
  option.innerText = arr [i];
  options.appendChild(option);  
};



function postData(evt){
  evt.preventDefault();
  const block = document.createElement('div');
    for (let i = 0; i < labels.length; i += 1) {
    let p = document.createElement('p')
    p.innerHTML = labels[i].innerText + ": " + form[i].value
    block.appendChild(p)
    result.appendChild(block)
    }
}

function clearData() {
  for (let i = 0; i < labels.length; i += 1) {
    form[i].value = ''
    }
}