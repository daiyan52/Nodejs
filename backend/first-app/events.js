const EventEmitter =  require('events');

// EventEmitter  is a class;
const emitter = new EventEmitter();

// emit() is used to raise an event

// Register an events

emitter.on('MessageLogged',()=>{
    console.log('Listener called');
})

// Raise an event
emitter.emit('MessageLogged'); 