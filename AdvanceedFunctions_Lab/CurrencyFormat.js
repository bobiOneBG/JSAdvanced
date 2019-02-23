function getDollarFormatter(formatter) {
    function dollarFormatter(value) {
        return formatter(',', '$', true, value);
    }
    return dollarFormatter;
}

function currencyFormat(separator, symbol, symbolFirst, value) {

    let result = Math.trunc(value) + separator;
    
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;

}

const dollarFormatter = getDollarFormatter(currencyFormat);
let result = dollarFormatter(22.32323);
console.log(result);