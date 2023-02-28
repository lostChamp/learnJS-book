const getSecondToTomorrow = () => {
    const SECOND_IN_DAY = 86400;
    let date = new Date();

    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let finalMillisec = date - today;

    return SECOND_IN_DAY - Math.round(finalMillisec / 1000);
}

console.log(getSecondToTomorrow());