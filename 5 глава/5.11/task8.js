const formatDate = (date) => {
    let diff = new Date() - date;

    if(diff < 1000) {
        return "прямо сейчас";
    }

    let diffInSec = Math.floor(diff / 1000);
    if(diffInSec < 60) {
        return diffInSec + " сек. назад";
    }

    let diffInMin = Math.floor(diff / 60000);
    if(diffInMin < 60) {
        return  diffInMin + " мин. назад";
    }

    let tempDate = date;

    tempDate = ["0" + tempDate.getDate(), "0" + (tempDate.getMonth() + 1),"" + tempDate.getFullYear(),
                "0" + tempDate.getHours(), "0" + tempDate.getMinutes()];

    tempDate = tempDate.map(item => item.slice(-2));

    return tempDate.slice(0, 3).join(".") + " " + tempDate.slice(3).join(":");
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));