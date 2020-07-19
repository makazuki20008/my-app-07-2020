import React from 'react';

class GetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username:'', password:'' };

        this.usernameHandle = this.usernameHandle.bind(this);
        this.passwordHandle = this.passwordHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }
    usernameHandle(event) {
        this.setState({ username: event.target.value });
    }
    passwordHandle(event) {
        this.setState({ password: event.target.value });
    }

    // submitHandle = event => {
    //     console.log(this.state.username);
    //     console.log(this.state.password);
    //     event.reventDefault();
    // }
    submitHandle(event) {
        console.log(this.state.username);
        console.log(this.state.password);
        event.preventDefault();
    };

    render() {
        return(
            <form onSubmit={this.submitHandle}>
                Username:
                <input type="text" value={this.state.username} name="username" onChange={this.usernameHandle}/><br/> 
                Password:
                <input type="password" value={this.state.password} name="password" onChange={this.passwordHandle}/><br/>
                <input type="submit" value="Login"/>
            </form>
        )
    }
}

export default GetForm;