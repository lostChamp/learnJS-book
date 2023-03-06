const amountToSimpleFor = (num) => {
    let resultFor = 0;
    for(let i = 0; i <= num; i++) {
        resultFor += i;
    }
    return resultFor;
}

const amountToRec = (num) => {
    if(num === 0 || num === 1) {
        return num
    }else {
        return num + amountToRec(num - 1);
    }
}

const amountToProgression = (num) => {
    return num * (num + 1) / 2;
}

console.log(`Сумма при помощи обычного цикла = ${amountToSimpleFor(100)}`);
console.log(`Сумма при помощи рекурсии = ${amountToRec(100)}`);
console.log(`Сумма при помощи формулы = ${amountToProgression(100)}`);