//create element with React.createElement()
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

ReactDOM.render(
    element,
    document.getElementById('root')
  );