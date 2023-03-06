const printNumbers1 = (from, to) => {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

const printNumbers2 = (from, to) => {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

printNumbers1(5, 10);
printNumbers2(5, 10)