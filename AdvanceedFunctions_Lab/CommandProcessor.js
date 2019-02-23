// function commandProcessor(arr) {
//     let commandProcessor = (() => {
//         let output = '';

//         return {
//             append: (str) => output = output + str,
//             removeStart: (num) => output = output.slice(num),
//             removeEnd: (num) => output = output.substring(0, output.length - num),
//             print: () => console.log(output)
//         };
//     })();    

//     for (let str of arr) {
//         let [command, value] = str.split(' ');
//         commandProcessor[command](value);
//     }
// }

// commandProcessor([
//     "append hello",
//     "append again",
//     "removeStart 3",
//     "removeEnd 4",
//     "print"
// ]);

let f = (function() {
    let counter = 0;
    return function() {
      console.log(++counter);
    };
  })();
  