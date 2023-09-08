// ES6 Anonymous Functions
// A function without a name.
// It can be declared dynamically at runtime.
// An anonymous function can be assigned within a variable.



var myFunctions = function () {
    return "Anonymous Functions";
}
console.log(myFunctions());



var myFunctions = function (x) {
    return x;
}
console.log(myFunctions("Hello World"));



var myFunctions = function (...a) {
    return a;
}
console.log(myFunctions(1, 2, 3, 4, 5, 6, 7));