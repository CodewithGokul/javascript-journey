const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let rows = 3;
let arr = [];

function readInput() {
    if (arr.length < rows) {
        rl.question('', (input) => {
            arr.push(input.split(' '));
            readInput(); // Recursively read next line
        });

    } else {
        
        rl.close();
        arr.forEach((row) => {
            row.forEach((val) => {
                console.log(val);
            });
            console.log('\n');
        });
    }
}

readInput();
