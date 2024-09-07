
process.on('exit',(code)=>{

        console.log(`${code}`)
})

setInterval(()=>{
    console.log("Hello World!!")
},1000);

setTimeout(()=>{
    console.log("Ended");
    process.exit();
},5000);

console.log("Good start");
