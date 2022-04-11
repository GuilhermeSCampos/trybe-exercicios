function verificarFimPalavra(word, ending) {
    for (let index = ending.length - 1; index >= 0; index -= 1) {
        if (ending[index] === word[word.length - 1]) {
            return true;
        } else {
            return false;
        }
    }
}

let a = 'trybe';
let b = 'be';

console.log(verificarFimPalavra(a,b));