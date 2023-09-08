// ES6 Returning Functions

function myReturn() {
    return "String";
}

console.log(myReturn());



function retOne() {
    return 20;
}

function retTwo() {
    return 30;
}

console.log(retOne() + retTwo());



function returnOne() {
    return 20;
}

function returnTwo() {
    return returnOne();
}

console.log(returnTwo());