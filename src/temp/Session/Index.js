import React from 'react';
import Session from './Session';
import Child from './Child';

class IndexSession extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                Set session.username:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;session.getUsername('binhan')
                <div>{Session.setUsername("binhan")}</div>
                <br/>
                <Child></Child>
            </div>
        )
    }
}

export default IndexSession;