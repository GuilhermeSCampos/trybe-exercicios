let word = 'trybe';
let contrario = ""

for (let index = 0; index < word.length; index += 1) {
    contrario = contrario + word[word.length - index - 1];
}

console.log(contrario);