const getSecondToday = () => {
    let date = new Date();

    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let finalMillisec = date - today;

    return Math.round(finalMillisec / 1000);
}

console.log(getSecondToday());