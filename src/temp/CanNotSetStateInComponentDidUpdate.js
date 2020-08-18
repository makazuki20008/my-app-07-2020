import React, { Component } from 'react';

class CanNotSetStateInComponentDidUpdate extends Component {
    render() {
        return (
            <div>
                componentDidUpdate() this.setState()
            </div>
        );
    }
}

export default CanNotSetStateInComponentDidUpdate;