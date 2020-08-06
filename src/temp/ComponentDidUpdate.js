import React from 'react';

class CDUProperties extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }

    componentDidUpdate() {
        alert('update');
    }
    clickHandle = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        if(this.state.show)
            return(
                <div>ComponentDidUpdate
                    <button onClick={this.clickHandle} style={{backgroundColor: 'red', color: 'white'}}>Hide</button>
                </div>
            )
        else 
            return(
                <div>ComponentDidUpdate
                    <button onClick={this.clickHandle} style={{backgroundColor: 'lightgreen', color: 'white'}}>Show</button>
                </div>
            )
    }
} 

export default CDUProperties;