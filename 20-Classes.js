// ES6 Classes

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



// ES6 Class Constructor

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



// ES6 Class Static Keyword

// Without Static Keyword: Properties --Directly Connected-- Class Object
// Without Static Keyword: Properties --Not Connected-- Direct Class

// With Static Keyword: Properties --Not Connected-- Class Object
// With Static Keyword: Properties --Directly Connected-- Direct Class

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



// ES6 Class Inheritance
// Parent Class --linked-- Child Class
// Child Class can modify Parent Class Function

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



// ES6 Super Keyword

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