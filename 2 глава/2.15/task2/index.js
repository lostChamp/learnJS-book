function checkAge1(age) {
    return (age > 18) ? true : 'Родители разрешили?';
}

console.log(checkAge1(19));

function checkAge2(age) {
    return (age > 18) || 'Родители разрешили?';
}

console.log(checkAge2(18));