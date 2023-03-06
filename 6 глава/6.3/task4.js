const sum = (firstNum) => {
    return function(secondNum) {
        return firstNum + secondNum;
    }
}

console.log(sum(4)(5));