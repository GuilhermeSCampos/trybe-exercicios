// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async() => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke);   
    const jokeContainer = document.getElementById("jokeContainer");
    jokeContainer.innerText = joke;
};

window.onload = () => fetchJoke();