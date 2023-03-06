const inBetween = (firstNum, secondNum) => {
    return function(thirdNum) {
        return thirdNum <= secondNum && thirdNum >= firstNum;
    }
}

const inArray = (arr) => {
    return function(el) {
        return arr.includes(el);
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));