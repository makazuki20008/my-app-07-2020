import React from 'react';

class StateInClass extends React.Component {
    constructor(props){
        super(props);
        this.state = { input: "" }
    }

    updateInput = input => {
        this.setState({ input })
    }

    doSomething = () => {
        alert("Pure function")
    }

    render() {
        return(
            <div>
                <p>{this.state.input}</p>
                <input onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
                <button onClick={()=> this.doSomething()}>Submit</button>
            </div>
        )
    }
}

// bất cứ attribute nào trong jsx đều có thể sử dụng code javascript với {} sau dấu =
// xác định được attribute nào nhận dữ liệu về
// xác định được attribute nào gửi dữ liệu đi || attribute nào thực thi dữ liệu

export default StateInClass;