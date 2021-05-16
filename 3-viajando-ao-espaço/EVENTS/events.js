// const { EventEmitter } = require('events');

// const ev = new EventEmitter();

// ev.once('Alô', (message) => {
//   console.log('Eu ouvi você:', message);
// });

// ev.emit('Alô', 'Eloilson');
// ev.emit('Alô', 'Fernando');
// ev.emit('Alô', 'Renato');

const { inherits } = require('util');
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')