const a = 15;
const b = 35;
let lucro = b - a*1.2;

if (a > 0 && b > 0) {
    console.log("O lucro de mil vendas desse produto será de:",lucro*1000);
} else {
    console.log("Valor Inválido!")
}