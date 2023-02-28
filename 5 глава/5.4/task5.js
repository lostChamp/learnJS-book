const getMaxSubSum = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        let start = 0
        for(let j = i; j < arr.length; j++) {
            start += arr[j];
            sum = Math.max(sum, start);
        }
    }

    return sum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));