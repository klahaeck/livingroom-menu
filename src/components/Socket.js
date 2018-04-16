import io from 'socket.io-client';
import config from '../config';

const Socket = io(config.socketURL, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax : 5000,
  reconnectionAttempts: Infinity
});
Socket.on('connect', function() {
  console.log(config);
  Socket.emit('room', config.room);
});

export default Socket;