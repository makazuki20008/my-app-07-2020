const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {         // name of client function subcribeToTimer
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());                 // name of value
    }, interval);
  });
  client.on('subscribeToCount', (interval) => {         // name of client function subcribeToTimer
    console.log('client is subscribing to count with interval ', interval);
    setInterval(() => {
      client.emit('count', 1);                 // name of value
    }, interval);
  });
});

const port = 4000;
io.listen(port);
console.log('listening on port ', port);

//------------------------------------------------------------------------------------------------
// 'time'
import openSocket from 'socket.io-client';

const  socket=openSocket('http://localhost:4000');      // connect to server socket.io

function subscribeToTimer(cb) {                         // name of function write in server
  socket.on('timer', timestamp => cb(null, timestamp)); // name of value 'timer'
  socket.emit('subscribeToTimer', 1000);                // time of refresh value
}export { subscribeToTimer };

function subscribeToCount(cb) {                         // name of function write in server
  socket.on('timer', countvalue => cb(null, countvalue)); // name of value 'timer'
  socket.emit('subscribeToCount', 1000);                // time of refresh value
}export { subscribeToCount };

//------------------------------------------------------------------------------------------------
// timestamp
import React from 'react';
import { subscribeToTimer } from './client/api';
import { subscribeToCount } from './client/api';

class ReactJSSocketIO extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timestamp: 'no timestamp yet',
            countvalue: 'no countvalue yet'
        }

        // timestamp là 1 value lấy từ server socket.io
        // timestamp
        // socket.on('timer', timestamp => cb(null, timestamp))
        
        subscribeToTimer((err, timestamp) => this.setState({ 
            timestamp 
          }));

        subscribeToCount((err, countvalue) => this.setState({ 
          countvalue 
        }));
    }
    render(){
        return(
            <div>
                This is the timer value: {this.state.timestamp}<br />
                This is the count value: {this.state.countvalue}
            </div>
        )
    }
}

export default ReactJSSocketIO;