const camelize = (str) => {
    let tempArr = str.split('-');
    for(let i = 0; i < tempArr.length; i++) {
        if(i === 0) {
            tempArr[i] = tempArr[i];
        }else {
            tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1);
        }
    }
    return tempArr.join('');
}

console.log(camelize("-webkit-transition"));
console.log(camelize("list-style-image"));
console.log(camelize("background-color"));