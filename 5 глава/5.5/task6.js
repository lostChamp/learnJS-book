function Calculator () {

    this.operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    }

    this.calculate = function(str) {
        let exp = str.split(' ');
        let a = Number(exp[0]);
        let op = exp[1];
        let b = Number(exp[2]);

        if(isNaN(a) || isNaN(b) || !this.operations[op]) {
            return NaN;
        }

        return this.operations[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.operations[name] = func;
    }
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);