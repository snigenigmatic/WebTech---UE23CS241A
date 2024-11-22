var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('Event1', () => {
    console.log('Event1 has been emitted');
})

eventEmitter.emit('Event1');