let sortArr = function (arr, order) {
    let sortedArr = {
        asc: () =>  arr.sort((a, b) => {
            return a - b;
        }),

        desc: () =>  arr.sort((a, b) => {
            return b - a;
        })
    };

    return sortedArr[order](arr);
};
//console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
//sortArr([14, 7, 17, 6, 8], 'asc');

console.log(sortArr([14, 7, 17, 6, 8], 'desc'));

function sortArray(arr, method){

    let sortType = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };

    return arr.sort(sortType[method]);
}