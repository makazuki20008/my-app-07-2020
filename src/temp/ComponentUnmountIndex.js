import React from 'react';
import CUMPropertiesChild from './ComponentUnmoundChild';

class CUMPropertiesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }
    clickHandle = () => {
        this.setState({ show: !this.state.show });
    }
    render() {
        if(this.state.show)
            return(
                <div><button onClick={this.clickHandle} style={{ backgroundColor: 'red', color: 'white'}}>Hide</button><CUMPropertiesChild></CUMPropertiesChild></div>
            )
        else 
            return(
                <div><button onClick={this.clickHandle} style={{ backgroundColor: 'lightgreen', color: 'white'}}>Show</button></div>
            )

    }
}

export default CUMPropertiesIndex;