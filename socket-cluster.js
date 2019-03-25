const sockets = require('socket.io');
const redis = require('socket.io-client');

const bindListeners = (io) => {
  io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);
  });
}

module.exports = (server) => {
  const io = sockets(server, {
    transports: [ 'websocket', 'polling' ]
  });
  io.adapter(redis({
    host: 'localhost',
    port: 6379,
  }));
  bindListeners(io);
}