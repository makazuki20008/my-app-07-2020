const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );



  // Note: this structure is simplified
const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };