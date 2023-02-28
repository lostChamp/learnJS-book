const sumSalaries = (obj) => {
    let sum = 0;
    for(let num of Object.values(obj)) {
        sum += num;
    }

    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries));