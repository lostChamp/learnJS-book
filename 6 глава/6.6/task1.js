const makeCounter = () => {
    let count = 0;
    function counter() {
        console.log(count);
        return count++;
    }

    counter.set = (value) => {
        count = value;
        console.log(count);
    }

    counter.decrease = () =>  {
        count--;
        console.log(count);
    }

    return counter;
}

let counter = makeCounter();

counter();
counter();
counter();

counter.set(5);
counter.decrease();



