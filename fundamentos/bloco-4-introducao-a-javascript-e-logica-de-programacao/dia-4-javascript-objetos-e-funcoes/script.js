function verificarPalindromo(palavra) {
    let cont = palavra.length;
    for (let index of palavra) {
        if(index === palavra[cont - 1]) {
        return true;
        cont -= 1
        }
        else {
            return false;
            break;
        }
    }
    
}

console.log(verificarPalindromo('desenvolvimento'));





