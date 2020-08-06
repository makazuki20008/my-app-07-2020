import React from 'react';

//''
//0
//null
//undefine
//NaN

// Object: {}
// Array: []
// Not empty string: "anything"
// Number other than zero: 3.14
// Date: new Date();

// ===
// !==

var show = true;

class DoubleExclamation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if(!!show) // cast to boolean
            return(
                <div>show</div>
            )
        else 
            return(
                <div>hide</div>
            )
    }
}

export default DoubleExclamation;