function somatorio(natural) {
    let soma = 0;
    for (let index = 1; index <= natural; index += 1) {
        soma += index;
    }
    return soma;
}

let n = 1000;

console.log(somatorio(n));