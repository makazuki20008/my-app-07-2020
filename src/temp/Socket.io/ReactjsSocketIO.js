// import React from 'react';
// import { subscribeToTimer } from './client/api';

// class ReactJSSocketIO extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             timestamp: 'no timestamp yet'
//         }

//         // timestamp là 1 value lấy từ server socket.io
//         // timestamp
//         // socket.on('timer', timestamp => cb(null, timestamp))
        
//         subscribeToTimer((err, timestamp) => this.setState({ 
//             timestamp 
//           }));
//     }
//     render(){
//         return(
//             <div>
//                 This is the timer value: {this.state.timestamp}
//             </div>
//         )
//     }
// }

// export default ReactJSSocketIO;

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