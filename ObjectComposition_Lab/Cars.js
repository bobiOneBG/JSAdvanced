function carData(arguments) {
    let process = (function processData() {
        let carsObj = {};

        function create([objName, inherits, parentName]) {
            if (inherits) {
                inherit(objName, parentName);
            } else {
                carsObj[objName] = {};
            }
        }

        function set([objName, key, value]) {
            carsObj[objName][key] = value;
        }

        function print(name) {
            let props = [];
            for (let key in carsObj[name]) {
                let currentProp = `${key}:${carsObj[name][key]}`;
                props.push(currentProp);
            }
            console.log(props.join(', '));
        }

        function inherit(objName, parentName) {
            let parent = carsObj[parentName];
            carsObj[objName] = Object.create(parent);
        }
        return {
            create,
            set,
            print
        };
    })();

    for (const command of arguments) {
        let args = command.split(' ');
        let action = args.shift();

        process[action](args);
    }
}

carData([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);