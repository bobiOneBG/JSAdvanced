// function listProcessor( arr ) {
let commandExecutor = function () {
        let result = [];

        function add(str) {
            result.push(str);
        }

        function remove(str) {
            result = result.filter(el => el !== str);
        }

        function print() {
            console.log(result.join(','));
        }

        return {
            add,
            remove,
            print
        };
    }();

    // for (const pair of arr) {
    //     let [command, value] = pair.split(' ');
    //     comandExecutor[command](value);
    // }
//}

// listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);




//const input = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
const input = ['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'];

input.forEach((el) => {
    let action=el.split(' ');
    commandExecutor[action[0]](action[1]);
});