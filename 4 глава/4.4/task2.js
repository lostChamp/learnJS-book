const calculate = {
    read(firstNum, secondNum) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    },

    sum() {
        return this.firstNum + this.secondNum;
    },

    mul() {
        return this.firstNum * this.secondNum;
    }
}

calculate.read(5, 4);

console.log(calculate.sum());
console.log(calculate.mul());