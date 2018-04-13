import io from 'socket.io-client';

// const Socket = io('http://localhost:9095'); // DEVELOPMENT
const Socket = io('https://socket.fallondev.com', {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax : 5000,
  reconnectionAttempts: Infinity
});
Socket.on('connect', function() {
  Socket.emit('room', 'spotify');
});

export default Socket;