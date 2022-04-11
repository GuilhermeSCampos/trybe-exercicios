function smaller(inteiros) {
    let temp = 0;
    let a;
    for (let index in inteiros) {
        if (temp < inteiros[index]) {
            temp = inteiros[index];
            a = [index];
        }

    }
    return a;
}
let array = [2, 3, 6, 7, 10, 1];

console.log(smaller(array));




