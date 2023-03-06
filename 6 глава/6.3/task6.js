const byField = (field) => {
    return (el1, el2) => el1[field] > el2[field] ? 1 : -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.forEach(user => console.log(user.name));

users.sort(byField('age'));
users.forEach(user => console.log(user.name));
