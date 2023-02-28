const filterRangeInPlace = (arr, a, b) => {
    for(let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if(val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1, 3, 5, 10];

filterRangeInPlace(arr, 1, 4);

console.log(arr);