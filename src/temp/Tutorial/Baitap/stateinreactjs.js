import React from 'react';

class StateTutorial extends React.Component {
    constructor(props){
        super(props);
        this.state = { inputvalue: "" };
    };

    render() {
        return(
            <div>
                <input value={this.state.inputvalue}/>
                <button onClick={alert(this.state.inputvalue)}>Submit</button>
            </div>
        )
    };
}

export default StateTutorial;