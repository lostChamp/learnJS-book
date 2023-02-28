const getDateAgo = (date, days) => {
    let copy = new Date(date);

    copy.setDate(date.getDate() - days);

    return copy.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));