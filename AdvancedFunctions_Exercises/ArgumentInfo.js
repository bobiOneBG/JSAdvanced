function func() {
    let rslt = {};

    [...arguments].forEach((obj => {
        console.log(typeof obj + ': ' + obj);

        if (!rslt[typeof obj]) {
            rslt[typeof obj] = 0;

        }
        rslt[typeof obj] += 1;
    }));

    Object.keys(rslt)
        .sort((a, b) => rslt[b] - rslt[a])
        .forEach((el) => {
            console.log(`${el} = ${rslt[el]}`);
        });
}

func('cat', 42, function () { console.log('Hello world!'); }
);