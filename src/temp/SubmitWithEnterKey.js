import React from 'react';

class SubmitWithEnter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            input: ''
        };

        this.inputHandle = this.inputHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }
    inputHandle = (event) => {
        this.setState({ input: event.target.value })
    }
    submitHandle = (event) => {
        console.log(this.state.username);
        event.preventDefault(); // prevent: ngăn chặn
    }

    render() {
        return(
            // form onSubmit={handle} is set "submit" when press "enter"
            <form onSubmit={this.submitHandle}>
                <input type="text" value={this.state.input} onChange={this.inputHandle}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default SubmitWithEnter;