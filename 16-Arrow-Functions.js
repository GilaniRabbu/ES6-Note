// ES6 Arrow Functions
// To write smaller function syntax.
// Arrow functions make your code more readable and structured.
// Arrow functions are anonymous functions.
// Can declare without the function keyword.
// Arrow functions cannot be used as the constructors.



var myArrow = () => {
    console.log("My Arrow Functions");
}
myArrow();



var newFun = (x, y) => {
    console.log(x + y);
}
newFun(5, 5);



var myFun = () => {
    return "Hello World!";
}
console.log(myFun());