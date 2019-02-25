//     judge:          Unexpected error: result is not a function

let manager = (function () {
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            carbohydrate: 10,
            flavour: 10,
            fat: 10,
            protein: 10
        }
    };

    let executor = {
        restock:function (args)  {
            let microelement = args[0];
            let quantity = args[1];

            if (microelements.hasOwnProperty(microelement)) {
                microelements[microelement] += +quantity;
               // console.log('Success');
               return 'Success'
            } else {
               // console.log(`Error: there is no ${microelement} ingredient type`);
               return `Error: there is no ${microelement} ingredient type`;
            }
        },

        prepare:function (args)  { 
            let recipe = args[0];
            let count = +args[1];
            let els = Object.entries(recipes[recipe]);
            let hasEnoughElmnts = true;

            for (let i = 0; i < els.length; i++) {
                if (els[i][1] * count > microelements[els[i][0]]) {
                  //  console.log(`Error: not enough ${els[i][0]} in stock`);
                  hasEnoughElmnts = false;
                  return `Error: not enough ${els[i][0]} in stock`;                    
                  //  break;
                }
            }

            if (hasEnoughElmnts) {
                els.forEach(el => {
                    microelements[el[0]] -= el[1] * count;
                });
              //  console.log('Success');
              return 'success';
            }
        },

        report:function () { //console.log(Object.keys(microelements)
           // .map(e => `${e}=${microelements[e]}`).join(' ')) 
             Object.keys(microelements)
            .map(e => `${e}=${microelements[e]}`).join(' ')
        }
    };
    return function execute(command) {
        if (command) {
            let args = command.split(' ');

            return executor[args.shift()](args);
        }
    };
})();

manager('restock carbohydrate 10');
manager('restock flavour 10');
manager('prepare apple 1');
manager('restock fat 10');
manager('prepare burger 1');
manager('report');