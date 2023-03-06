const fib = (num) => {
    let firstNum = 1;
    let secondNum = 1;
    for(let i = 3; i <= num; i++) {
        let thirdNum = firstNum + secondNum;
        [firstNum, secondNum] = [secondNum, thirdNum];
    }

    return secondNum;
}

console.log(fib(7));