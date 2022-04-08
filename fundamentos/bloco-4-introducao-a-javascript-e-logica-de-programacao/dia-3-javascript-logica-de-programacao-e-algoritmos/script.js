let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = "";

for (let index = 0; index < array.length; index += 1) {
    if (palavra.length < array[index].length) {
        palavra = array[index];
    }
}

console.log(palavra);

////////////////////////////////////////////////////////////////////

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (palavra.length > array[index].length) {
        palavra = array[index];
    }
}

console.log(palavra);