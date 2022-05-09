const longestWord = string => {
  const frase = string.split(' ');
  let Palavra = "";

  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i].length > Palavra.length) {
      Palavra = frase[i];
    }
  }
  return Palavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));