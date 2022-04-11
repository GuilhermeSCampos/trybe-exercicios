function smaller(inteiros) {
    let a = "";
    for (let index of inteiros) {
        if (a.length < index.length) {
            a = index;
        }
    }
    return a;
}
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(smaller(array));




