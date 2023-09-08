// ES6 Arrays

let a = new Array(1, 2, 3, 4, 5, 6, 7);

let x = ["A", "B", "C", "D", "E", "F", "G"];

console.log(x[5]); // Output F

for (let item of a) {
    console.log(item); // Output 1 2 3 4 5 6 7
}



// ES6 Multi-Dimensional Arrays

var Asia = new Array("Bangladesh", "North Korea", "Japan");

var Europe = new Array("Russia", "Belarus", "Turkey");

var Africa = new Array("Algeria", "Egypt", "Mali");

var Continent = [Asia, Europe, Africa];

console.log(Continent[1][2]); // Output Turkey



// ES6 Array de-structuring

// Break down a complex structure into simpler parts

var Countries = ["Russia", "Bangladesh", "Ireland", "Egypt"];

var [r, b, i, e] = Countries;

console.log(b); // Output Bangladesh