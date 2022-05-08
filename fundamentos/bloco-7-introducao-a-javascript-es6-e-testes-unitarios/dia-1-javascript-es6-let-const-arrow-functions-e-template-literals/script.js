const fatorial = (number) => {
  let multiplicacao = 1;
  for (let i = 1; i <= number; i += 1) {
    multiplicacao = multiplicacao * i;
  }  
  return multiplicacao;
}

console.log(fatorial(4));