import React from 'react';

var name = "An";
var old = 27;

class TemplateTextOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>{ `Hello ${name} - I'm ${old}` }</div>
        )
    }
}

export default TemplateTextOutput;