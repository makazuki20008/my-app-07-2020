// For 1 function
// const io = require('socket.io')();

// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
// });

// const port = 4000;
// io.listen(port);
// console.log('listening on port ', port);

// For 2 function
const io = require('socket.io')();

io.on('connection', (client) => {

  client.on('subscribeToCount', (interval) => {         // name of client function subcribeToTimer
    console.log('client is subscribing to count with interval ', interval);
    setInterval(() => {
      client.emit('count', "2");                 // name of value
    }, interval);
  });


  client.on('subscribeToTimer', (interval) => {         // name of client function subcribeToTimer
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());                 // name of value
    }, interval);
  });


});

const port = 4000;
io.listen(port);
console.log('listening on port ', port);