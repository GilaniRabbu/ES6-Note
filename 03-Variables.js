// ES6 Variables

// Reassigned
var nam = "Max";
nam = "Kara";
console.log(nam);

// Re-declared
var names = "Max";
var names = "Kara";
console.log(names);

// Variable Scope
var x = "ES6"; // Global Scope

function myFunction() {
    var a = "ES5"; // Local Scope
    console.log(x);
    console.log(a);
}
myFunction();

console.log(x);