import React, { Component } from 'react';

class StateChangeMultiValue extends Component {
    constructor(props) {
        super(props);
        this.state = { jsxData: '' }
    }
    
    render() {
        return (
            <div>
                <div>{this.state.jsxData}</div>
                <div>
                    <ul>
                        <li>{this.state.jsxData}</li>
                    </ul>
                </div>
                <p>{this.state.jsxData}</p>
            </div>
        );
    }
}

export default StateChangeMultiValue;