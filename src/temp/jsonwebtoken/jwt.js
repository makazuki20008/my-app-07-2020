import React from 'react';
import jwt from 'jsonwebtoken';

var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
var decoded = jwt.verify(token, 'shhhhh');

class JsonWebToken extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            decoded: '',
            key: 'cloudnight'
        }
    }
    componentDidMount() {
        var token = jwt.sign({ password: 'binhan123' }, this.state.key);
        var decoded = jwt.verify(token, this.state.key);
        
        this.setState({ token: token })
        this.setState({ decoded: decoded });
    }
    render() {
        return(
            <div>
                Token: {this.state.token}<br/>
                Decoded: {this.state.decoded.password}<br/>
                Key: {this.state.key}
            </div>
        )
    }
}

export default JsonWebToken;