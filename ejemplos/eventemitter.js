'use strict';

const EventEmitter = require('events');

// crear un emisor de eventos
const emisor = new EventEmitter();

emisor.on('llamada telefono', (quien) => {
  if (quien !== 'madre') {
    console.log('ring ring');
  }
});

emisor.once('llamada telefono', () => {
  console.log('brrr brrr');
});

emisor.emit('llamada telefono', 'asdas');
//emisor.emit('llamada telefono');
//emisor.emit('llamada telefono');
