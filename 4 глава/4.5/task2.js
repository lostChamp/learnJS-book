function Calculator() {
    this.read = function(firstNum, secondNum) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    };

    this.sum = function() {
        return this.firstNum + this.secondNum;
    };

    this.mul = function() {
        return this.firstNum * this.secondNum;
    };
}

const calculator = new Calculator();

calculator.read(5, 4);

console.log(calculator.sum());
console.log(calculator.mul());

const calculator2 = new Calculator();

calculator2.read(10, 5);

console.log(calculator2.sum());
console.log(calculator2.mul());