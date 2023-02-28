let user = {
    name: "Василий Иванович",
    age: 35
};

let userJson = JSON.parse(JSON.stringify(user));

console.log(userJson);