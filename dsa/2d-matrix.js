let arr = [];
let i = -1;
let row = 0;

// Start listening for input
console.log('Enter row size');
process.stdin.on('data', (data) => {
  if (i === -1) {
    // Read row size
    let val = data.toString().trim();
    row = Number(val);
    console.log(`Enter ${row} rows (space-separated values for each row):`);
    i++;
  } 
  
  else if (i < row) {
    // Read each row and convert to an array of numbers
    let col = data.toString().trim().split(' ').map(Number);
    arr.push(col);
    i++;
    
    // After all rows are collected, stop the input and print the array
    if (i === row) {
      console.log("2D array:");
      console.log(arr);
      process.stdin.end();
    }

  }
});
