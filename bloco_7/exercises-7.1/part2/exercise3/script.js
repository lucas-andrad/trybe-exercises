let number = document.querySelector('.counter');

document.querySelector('.click').addEventListener('click', () => {
  number.innerHTML = parseInt(number.innerHTML) + 1;
});
