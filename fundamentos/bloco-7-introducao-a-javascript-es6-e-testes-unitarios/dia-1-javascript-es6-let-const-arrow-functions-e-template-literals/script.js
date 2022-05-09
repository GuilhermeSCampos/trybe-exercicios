const button = document.getElementById("botao");
let clickerCount = 0;

button.addEventListener("click", () => {
  clickerCount += 1;
  document.getElementById("click").innerText = clickerCount;
})