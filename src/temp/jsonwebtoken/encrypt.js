import React from 'react';
import jwt from 'jsonwebtoken';

class EncryptJsonWebToken extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            key: 'cloudnight'
        }
    }
    componentDidMount() {
        var token = jwt.sign({ password: 'binhan123' }, this.state.key);
        
        this.setState({ token: token })
    }
    render() {
        return(
            <div>
                Token: {this.state.token}<br/>
                Key: {this.state.key}
            </div>
        )
    }
}

export default EncryptJsonWebToken;