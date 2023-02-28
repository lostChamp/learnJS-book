const topSalary = (obj) => {
    let topName = null;
    let topSalary = 0
    for(let [name, salary] of Object.entries(obj)) {
        if(salary > topSalary) {
            topName = name;
            topSalary = salary;
        }
    }
    return topName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));

