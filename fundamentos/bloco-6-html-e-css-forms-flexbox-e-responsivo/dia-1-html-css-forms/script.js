const button = document.getElementById("submit");
const input1 = document.getElementById("concordo2")

button.addEventListener("click", function (event) {
   if(input1.checked === false) {
       event.preventDefault();
       alert("Concorde com a divulgação de imagem");
   }
})
