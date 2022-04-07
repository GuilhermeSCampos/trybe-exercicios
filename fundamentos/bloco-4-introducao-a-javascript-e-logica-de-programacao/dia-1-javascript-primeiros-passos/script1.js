let sal = 3000;
let ir;

if (sal > 5189.82) {
    sal = sal - 570,88;
} else if (sal >= 2594.93 && sal <= 5189.82) {
    sal = sal*0.89;
} else if (sal >= 1556.95 && sal <= 2594.92) {
    sal = sal*0.91;
} else {
    sal = sal*0.92;
}
console.log(sal);

if (sal > 4664.68) {
    ir = sal*0.275 - 869.36;
    sal = sal - ir;
} else if (sal >= 3751.06 && sal <= 4664.68) {
    ir = sal*0.225 - 636.13;
    sal = sal - ir;
} else if (sal >= 2826.66 && sal <= 3751.05) {
    ir = sal*0.15 - 354.80;
    sal = sal - ir;
} else if (sal >= 1903.99 && sal <= 2826.65) {
    ir = sal*0.075 - 142.80;
    sal = sal - ir;
}

console.log("Salário Líquido: ",sal);
