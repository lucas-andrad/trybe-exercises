const API_URL = 'https://icanhazdadjoke.com/';
let joke = document.querySelector('#jokeContainer')

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => joke.innerText = data.joke)
};

window.onload = () => fetchJoke();