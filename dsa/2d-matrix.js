let arr = [];
let rows = 0;
let cols = 0
let rowlenght = 0;
let colength = 0;


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Number of Rows", (rw) => {       //Getting row Size
  rows = Number(rw);
});


rl.on("line", (data) => {                   //Reading Line By Line
  
  let row = data.split(" ").map(Number);
  arr.push(row);
  rowlenght++;
  if (rowlenght === rows) {
    rl.close();
  }
});


rl.on("close", () => {
  arr.forEach((row) => {
    row.forEach((data) => {
      console.log(data);
    });
    console.log("\n");
  });
});
