let someObj = { };

function A() {
    return someObj;
}

function B() {
    return someObj;
}

console.log(new A() === new B());