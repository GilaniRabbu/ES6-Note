# 📘 ES6 or ECMAScript 6

## 📗 What is ES6?

### 📒 General Concept :
- ES6 is a modern update of Javascript
- Wildly knows as JS6
- This is version of Javascript

### 📒 In Depth :
- ES6 or ECMAScript 6 is a scripting language.
- ECMAScript is generally used for client-side scripting
- Used for writing server applications and services by using Node.js

## <br>

## 📗 Why should i learn ES6?
- For React JS
- For React Native
- For Vue JS
- For Electron JS
- Or Any Node.js dependent development

## <br>

## 📗 ES6 Basic Syntax
- The syntax is the set of rules which defines the arrangements of symbols.

### 📒 Literals :
- A literal can be defined as a notation for representing the fixed value within the source code. Generally, literals are used for initializing the variables.

### 📒 Variables :
- A variable is the storage location that is identified by the memory address.

### 📒 Keywords :
- In Computer programming, a keyword is a word that has a special meaning in a specific context. It cannot be used as an identifier like the variable name, function name, or label.

### 📒 Operators :
- Operators are symbols that define the processing of operands.

### 📒 Case-Sensitive :
- Uppercase characters and lowercase characters are different.

### 📒 Semicolons :
- The use of semicolons is optional in JavaScript.

## <br>

## 📗 ES6 The Strict Mode
- Preventing you from using undeclared variables.
- Removes some of the JavaScript silent errors by changing them to throw errors.
- Fixed the mistakes, That is difficult for JS Engine to overcome.

```js
"use strict";

MyName();

function MyName() {
    name = "TOUFIQ GILANI";
}
```

## <br>

## 📗 ES6 Spread Operator
- Spread = প্রসার, বিস্তার
- Array কে প্রশস্ত করে নতুন ভেলু যোগ করে
- Spread the contents of an iterable object (such as an array or object) into another iterable object.
- The spread operator is denoted by three dots (...)

```js
let Asia = ["Bangladesh", "Oman", "Japan"];

let Africa = [...Asia, "Tunisia", "Algeria", "Egypt"];

// Output ['Bangladesh', 'Oman', 'Japan', 'Tunisia', 'Algeria', 'Egypt'];

console.log(Africa);
```

## <br>

## 📗 ES6 Variables

### 📒 Using var
- var can be re-declared
- can be reassigned a value

### 📒 Using let
- let keyword is assigned the block scope
- let cannot be re-declared
- can be reassigned a value

### 📒 Using const
- It cannot be reassigned a value
- It is block scoped
- A constant cannot be re-declared

```js
// Reassigned
var nam = "Max";
nam = "Kara";
console.log(nam);

// Re-declared
var names = "Max";
var names = "Kara";
console.log(names);
```

## <br>

## 📗 ES6 Variable Scope

### 📒 Global Scope
- In the global scope, the variable can be accessed from any part of the JavaScript code.

### 📒 Local Scope
- In the local scope, the variable can be accessed within a function where it is declared.

```js
var x = "ES6"; // Global Scope

function myFunction() {
    var a = "ES5"; // Local Scope
    console.log(x);
    console.log(a);
}
myFunction();

console.log(x);
```

## <br>

## 📗 ES6 Variable Hoisting
- A variable can be used before it is declared
- Hoisting মানে উত্তোলন
- Value assign আগে
- Declare পরে

```js
a = "ES6";

console.log(a);

var a;
```

## <br>

## 📗 ES6 Simple For Loop
- The JavaScript `for` statement loops through the values of an iterable objects.

```js
var i;

for (i = 0; i < 10; i = i++) {
    console.log("Max");
}
```

## <br>

## 📗 ES6 Simple For of Loop
- The JavaScript `of` statement loops through the values of an iterable objects.

```js
var myCount = ["one", "two", "three"];

for (let newCount of myCount) {
    console.log(newCount);
}
```

## <br>

## 📗 ES6 Object

```js
var cars = {
    color: "blue",
    brand: "Volvo",
    wheels: true,
    mileage: "199",
    seats: "5",
    tankVolume: "70"
}

console.log(cars["seats"]);

var car = {
    carColor: {
        color: "black",
        seatColor: "blue",
        tireColor: "brown"
    },
    carDetail: {
        brand: "BMW",
        seat: "4",
        mileage: "180",
        price: "$39,795",
        rating: "8.5",
        wheels: true
    }
}

console.log(car["carDetail"]["price"]);
```

## <br>

## 📗 ES6 For in Loop over a Object

```js
var newCar = {
    color: "blue",
    seatColor: "black",
    brand: "Volvo",
    wheels: true,
    seats: 4
}

for (let props in newCar) {
    // console.log(newCar[props]);
    console.log(props + ": " + newCar[props]);
    // console.log(`${props}: ${newCar[props]}`);
}
```

## <br>

## 📗 ES6 Decision Making

```js
var newCar = {
    color: "blue",
    seatColor: "black",
    brand: "Volvo",
    wheels: true,
    seats: 4
}

if (newCar["seats"] == 5) {
    console.log("Car have a 5 seat");
}
else if (newCar["seats"] == 6) {
    console.log("Car have a 6 seat");
}
else {
    console.log("Car have a 4 seat");
}
```

## <br>

## 📗 ES6 Functions
- **Simple Functions**
- **Parameterized Functions**
- **Rest Parameters**
  - Using rest parameter, a function can be called with any number of arguments.
  - Rest parameter is prefixed with three dots (...)
- **Returning Functions**
- **Anonymous Functions**
  - A function without a name.
  - It can be declared dynamically at runtime.
  - An anonymous function can be assigned within a variable.
- **Parameterized Anonymous Functions**
- **Arrow Functions**
  - To write smaller function syntax.
  - Arrow functions make your code more readable and structured.
  - Arrow functions are anonymous functions.
  - Can declare without the function keyword.
  - Arrow functions cannot be used as the constructors.
- **The Functions Constructor**

<br>

### 📒 ES6 Dynamic Functions

```js
var names = function (nameValue) {
    return nameValue;
}

console.log(names("Max Function"));
```

<br>

### 📒 ES6 Simple Functions

```js
function myName() {
    var x = 10;
    var y = 25;
    var z = x + y;
    console.log(z);
}
myName();
```

<br>

### 📒 ES6 Parameterized Functions

```js
function newCount(a, b) {
    var c = a + b;
    console.log(c);
}
newCount(10, 25);
```

<br>

### 📒 ES6 Rest Parameters

```js
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
```

<br>

### 📒 ES6 Returning Functions

```js
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
```

<br>

### 📒 ES6 Anonymous Functions

```js
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
```

<br>

### 📒 ES6 Arrow Functions

```js
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
```

## <br>

## 📗 ES6 Arrays
- Arrays Methods
- Arrays Destructuring

```js
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
```

## <br>

## 📗 ES6 Map
- Map is a collection of data

```js
var myMap = new Map();

myMap.set("key1", "Bangladesh");
myMap.set("key2", "Russia");
myMap.set("key3", "Ireland");
myMap.set("key4", "Egypt");
myMap.set("key5", "Algeria");
myMap.set("key6", "Japan");
myMap.set("key7", "Turkey");

console.log(myMap.values());

console.log(myMap.keys());

// Loop For Map Values and Keys
for (let myValue of myMap.values()) {
    console.log(myValue);
}
for (let myKey of myMap.keys()) {
    console.log(myKey);
}

// clear()
// myMap.clear();

// get(key)
console.log(myMap.get("key6"));

// delete(key)
myMap.delete("key1");
for (let myValue of myMap.values()) {
    console.log(myValue);
}

// has(value)
if (myMap.has("key10")) {
    console.log("yes");
} else {
    console.log("no");
}
```

## <br>

## 📗 ES6 Set
- Set is a collection of data
- Set is almost like array
- But it does not contain any duplicates

```js
let colors = new Set(["Red", "Green", "Blue", "Teal"]);

console.log(colors);

var mySet = new Set();
mySet.add("Red");
mySet.add("Green");
mySet.add("Blue");
mySet.add("Teal");
mySet.add("Cyan");
mySet.add("Yellow");
mySet.add("Black");

// mySet.clear();

// delete(value)
mySet.delete("Teal");

// Set.size
console.log(mySet.size);

// values()
console.log(mySet.values());

// has(value)
if (mySet.has("Cyan")) {
    console.log("Yes");
}
else {
    console.log("No");
}

console.log(mySet);
```

## <br>

## 📗 ES6 Classes
- JavaScript Classes are templates for JavaScript Objects.
- Use the keyword class to create a class.

```js
class MyClass {
    myFun1() {
        console.log("Hello World!1");
    }
    myFun2() {
        console.log("Hello World!2");
    }
    myFun3() {
        console.log("Hello World!3");
    }
    myFun4() {
        console.log("Hello World!4");
    }
}

var newObj = new MyClass;

newObj.myFun1();
newObj.myFun2();
newObj.myFun3();
newObj.myFun4();

class MyClasses {
    myFun1(nam) {
        console.log(nam);
    }
    myFun2(nam) {
        console.log(nam);
    }
    myFun3(nam) {
        console.log(nam);
    }
    myFun4(nam) {
        console.log(nam);
    }
}

var obj = new MyClasses;

obj.myFun1("Count-1");
obj.myFun2("Count-2");
obj.myFun3("Count-3");
obj.myFun4("Count-4");
```

<br>

### 📒 ES6 Class Constructor
- Constructor হচ্ছে ক্লাসের নিজস্ব মেথড / ফাংশন
- ক্লাস অবজেক্ট তৈরি হলেই, Constructor অটো কল হয়
- অন্য ফানশনের মতোই Constructor কাজ করে
- কিন্তু Constructor রিটার্ন করতে পারে না

```js
class MyClass1 {
    constructor() {
        console.log("Hello I am constructor");
    }
}

new MyClass1();

class MyClass2 {
    constructor(a, b) {
        this.firstNum = a;
        this.secondNum = b;
    }
    add() {
        let res = this.firstNum + this.secondNum;
        console.log(res);
    }
}

var myObj = new MyClass2(10, 20);

myObj.add();
```

<br>

### 📒 ES6 Class Static Keyword
- **Without Static Keyword :** Properties --Directly Connected-- Class Object
- **Without Static Keyword :** Properties --Not Connected-- Direct Class
- **With Static Keyword :** Properties --Not Connected-- Class Object
- **With Static Keyword :** Properties --Directly Connected-- Direct Class

```js
// Without Static
class MyCls {
    hello() {
        console.log("Hello World! New Function");
    }
}

var NewObj = new MyCls();

NewObj.hello();

// With Static
class myCls {
    static Hello() {
        console.log("Hello World! Static");
    }
}
myCls.Hello();
```

<br>

### 📒 ES6 Class Inheritance
- Parent Class --linked-- Child Class
- Child Class can modify Parent Class Function

```js
class parent {
    Hello1() {
        console.log("Class Inheritance 1");
    }
    Hello2() {
        console.log("Class Inheritance 2");
    }
}

class child extends parent {
    Hello1() {
        console.log("Class Inheritance 1 Update");
    }
}

var MyObj = new child();

MyObj.Hello1();
MyObj.Hello2();
```

### 📒 ES6 Super Keyword

```js
class parentCls {
    hello1(para) {
        console.log("Hello World!1");
    }
    hello2(para) {
        console.log("Hello World!2");
    }
}

class childCls extends parentCls {
    demo() {
        super.hello1();
        super.hello2();
    }
}

var Obj = new childCls();

Obj.demo();
```

## <br>

## 📗 ES6 Modules
- Module - জোট, একত্রিত কিছু
- ES6 Module Export - ES6 Module Import
- Modules make it easy to maintain the code
- Debug the code
- Reuse the piece of code
- Class Export - Import
- Function Export - Import
- Variable Export - Import
- Named: Export - Import By Using Same Name
- Default: Export - Import By Using Any Name

<br>

### 📒 Index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.svg" type="image/svg">
    <title>ES6 Modules</title>
    <script type="module" src="Import.js"></script>
</head>
<body>

</body>
</html>
```

<br>

### 📒 Export.js

```js
const laptop = "DELL Laptop, HP Laptop";

function Mobile() {
    console.log("New Model Mobile For Customer");
}

function Cars() {
    console.log("New Model Car For Customer");
}

class NewCls {
    Tools() {
        console.log("New Tools");
    }
}

// By Using Same Name
export { laptop, Mobile, Cars };

// By Using Any Name
export default NewCls;
```

<br>

### 📒 Import.js

```js
import { laptop, Mobile, Cars } from "./Export.js";

console.log(laptop);
Mobile();
Cars();

import abc from "./Export.js"; // Default
let obj = new abc();
obj.Tools();
```

## <br>

## 📗📗📗