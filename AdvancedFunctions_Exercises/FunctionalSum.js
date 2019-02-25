let result= (function functionalSum() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = () => sum;
    return add;
}());

console.log(result(6)(1)(-3)+'');