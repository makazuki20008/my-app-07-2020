import React from 'react';

class CUMPropertiesChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillUnmount() {
        alert('unmount');
    }
    render() {
        return(
            <div>CUMPropertiesChild</div>
        )
    }
}

export default CUMPropertiesChild;