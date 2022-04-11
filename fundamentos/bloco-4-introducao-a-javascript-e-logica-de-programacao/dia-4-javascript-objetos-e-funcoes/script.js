function smaller(inteiros) {
    let temp = 0;
    let rep = 0;
    let a;
    for(let index of inteiros) {
        for(let index2 of inteiros) {
            if (index === index2) {
                rep += 1;
            }
        }
        
        if (rep > temp) {
            a = index;
        }
        temp = rep;
        rep = 0;
    }
    return a;
}

let array = [2, 3, 2, 5, 8, 2, 3];

console.log(smaller(array));




