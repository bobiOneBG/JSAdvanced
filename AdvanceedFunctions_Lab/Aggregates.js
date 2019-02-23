function calcAggregates(arr) {
    console.log('Sum = ' + arr.reduce((acc, cur) => +(acc) + (cur)));
    console.log('Min = ' + arr.reduce((acc, cur) => Math.min(acc, cur)));
    console.log('Max = ' + arr.reduce((acc, cur) => Math.max(acc, cur)));
    console.log('Product = ' + arr.reduce((acc, cur) => +(acc) * (cur)));
    console.log("Join = " + arr.reduce((acc, cur) => '' + acc + cur));
}

calcAggregates([5, -3, 20, 7, 0.5]);