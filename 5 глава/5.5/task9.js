const sortByAge = (arr) => {
    return arr.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let andrey = {name: "Андрей", age: 40}
let misha = {name: "Миша", age: 20}

let arr = [ andrey, vasya, petya, masha, misha ];

console.log(sortByAge(arr));

