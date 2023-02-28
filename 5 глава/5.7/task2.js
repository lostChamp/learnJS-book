const aclean = (arr) => {
    let map = new Map();
    for(let el of arr) {
        let word = el.toLowerCase().split("").sort().join("");
        map.set(word, el);
    }
    return [...new Set(map.values())];
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));