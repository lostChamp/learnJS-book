const getAverageAge = (users) => {
    let avg = users.map(item => item.age);
    let sum = 0;
    for(let item of avg) {
        sum += item;
    }
    return sum / avg.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log(getAverageAge(arr));