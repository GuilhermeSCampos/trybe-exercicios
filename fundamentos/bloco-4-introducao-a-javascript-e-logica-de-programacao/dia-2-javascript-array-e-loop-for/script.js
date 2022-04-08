let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index + 1] === undefined) {
        numbers2.push(numbers[index] * 2);
    } else {
        numbers2.push(numbers[index] * numbers[index + 1]);
    }   
}
console.log(numbers2);