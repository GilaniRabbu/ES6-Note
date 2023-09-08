// ES6 Rest Parameters
// Using rest parameter, a function can be called with any number of arguments.
// Rest parameter is prefixed with three dots (...)


function calculate(a, b, ...numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum = sum + i;
    }
    console.log(sum);
}
calculate(10, 12, 1, 2, 3, 4, 5, 6);


function newPara(...num) {
    // console.log(num);
    console.log(num[0]);
}
newPara(1, 2, 3, 4, 5, 6, 7, 8, "A", "B");