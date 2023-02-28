let flag = true;

for(let i = 2; i <= 10; i++) {
    flag = true;
    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            flag = false;
            break;
        }
    }
    if(flag) {
        console.log(`${i} - простое число`);
    }
}