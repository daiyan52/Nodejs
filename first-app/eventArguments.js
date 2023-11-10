const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("messageLogged", (err)=>{
    console.log('Listener called',err);
})

emitter.emit("MessageLogged", {id:1,url:'https//google.com'})