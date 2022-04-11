function smaller(inteiros) {
    let temp = inteiros[0];
    let a;
    for (let index in inteiros) {
        if (temp > inteiros[index]) {
            temp = inteiros[index];
            a = [index];
        }

    }
    return a
}
let array = [2, 4, 6, 7, 10, 0, -3];

console.log(smaller(array));




