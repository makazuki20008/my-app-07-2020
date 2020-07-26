// For 1 function
// import openSocket from 'socket.io-client';

// const  socket=openSocket('http://localhost:4000');

// function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }export { subscribeToTimer };

// For 2 function
import openSocket from 'socket.io-client';

const  socket=openSocket('http://localhost:4000');      // connect to server socket.io

function subscribeToTimer(cb) {                         // name of function write in server
  socket.on('timer', timestamp => cb(null, timestamp)); // name of value 'timer'
  socket.emit('subscribeToTimer', 50);                // time of refresh value
}export { subscribeToTimer };


function subscribeToCount(cb) {                         // name of function write in server
  socket.on('count', countvalue => cb(null, countvalue)); // name of value 'timer'
  socket.emit('subscribeToCount', 1000);                // time of refresh value
}export { subscribeToCount };


