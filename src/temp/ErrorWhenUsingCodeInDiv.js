import React from 'react';

class ErrorWhenUsingCode extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div>var a = () => (<div>Hello</div>) </div>
        )
    }
}

export default ErrorWhenUsingCode;