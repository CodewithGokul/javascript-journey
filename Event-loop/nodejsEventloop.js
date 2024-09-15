const fs = require('fs');
//Stores in Global context Execution
console.log("0 phase");

//Stores in 3nd phase of Event loop
setImmediate(()=>{
    console.log("3rd Phase")
    
//Stores in 2nd phase
fs.readFile('',()=>{
    console.log('2nd Phase')
})

//Stores in 1st phase of Event loop;
setTimeout(()=>{
    console.log("1st Phase");
},0)
});





console.log('0 phase also')