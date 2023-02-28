const extractCurrencyValue = (str) => {
    return Number(str.slice(1));
}

console.log(extractCurrencyValue('$120') === 120);