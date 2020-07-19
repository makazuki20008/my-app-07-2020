import React from 'react';
import ReactDOM from 'react-dom';
function tick() {
      const element = (
          <div>
              <h1>Hello, world!</h1>
              <h1>It is {new Date().toLocaleTimeString()}.</h1>
          </div>
      );

      ReactDOM.render(
          element,
          document.getElementById('root')
      );
}

setInterval(tick, 1000);