const EventEmitter = require('events');
const event = new EventEmitter();


//event listening or capturing 

event.on('logging',(fn)=>{
    fn("Gokul Vijay N");
})

//event emitter 0r producer
event.emit('logging',(data)=>{
    console.log(data);
})

