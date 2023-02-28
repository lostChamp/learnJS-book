function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(num) {
        this.value += num;
    }
}

const accumulator = new Accumulator(4);

accumulator.read(4);
accumulator.read(5);

console.log(accumulator.value);