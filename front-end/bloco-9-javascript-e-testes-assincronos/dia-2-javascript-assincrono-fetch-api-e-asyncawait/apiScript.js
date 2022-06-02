// apiScript.js
const API_URL = `https://api.coincap.io/v2/assets`;
const list = document.getElementById("list");

const fetchAppend = async() => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const moedas = json.data;
    
    for (let i = 0; i < 10; i += 1) {
        const newLi = document.createElement('li');
        console.log(moedas[i]);
        newLi.innerText = `${moedas[i].name} (${moedas[i].symbol}): ${Number(moedas[i].priceUsd).toFixed(2)}`;
        list.appendChild(newLi);
    }
};

window.onload = () => fetchAppend();