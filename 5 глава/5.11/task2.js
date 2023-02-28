const getWeekDay = (date) => {
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    return days[date.getDay()];
}

let date1 = new Date(2012, 0, 3);

console.log(getWeekDay(date1));

let date2 = new Date(2014, 0, 3);

console.log(getWeekDay(date2));