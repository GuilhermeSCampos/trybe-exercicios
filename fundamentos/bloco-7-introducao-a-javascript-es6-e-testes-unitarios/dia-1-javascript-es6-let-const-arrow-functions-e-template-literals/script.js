const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const crescente = array => {
    // for (let i = 0; i < array.length - 1; i += 1) {
    //     for (let j = 0; j < array.length - 1 - i; j += 1) {
    //         if (array[j] > array[j + 1]) {
    //             let temp = array[j];
    //             array[j] = array[j + 1];
    //             array[j + 1] = temp;
    //         }
    //     }
    // }
    return array;
}
console.log(crescente(oddsAndEvens)); // será necessário alterar essa linha 😉