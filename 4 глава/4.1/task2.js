const isEmpty = (obj) => {
    for(let key in obj) {
        return false;
    }
    return true;
};

const obj = {};

console.log(isEmpty(obj));

obj.name = "John";

console.log(isEmpty(obj));