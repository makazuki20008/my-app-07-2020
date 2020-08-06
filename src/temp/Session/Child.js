import React from 'react';
import Session from './Session';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>Get session.username: &nbsp;&nbsp;{Session.getUsername()}</div>
        )
    }
}

export default Child;