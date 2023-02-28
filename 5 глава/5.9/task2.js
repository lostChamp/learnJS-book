const count1 = (obj) => {
    let counter = 0
    for(let property of Object.keys(obj)) {
        counter++;
    }

    return counter;
}

const count2 = (obj) => {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};

console.log(count1(user));
console.log(count2(user));