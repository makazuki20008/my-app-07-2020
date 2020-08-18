import React from 'react';

var obj = {
    name: 'An',
    old: 27
};

class ConsoleLogObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                {console.log("obj: " + obj)} {/* only [Object Object] */}
                {console.log(obj)} {/* Object with data {name: 'An', old: 27} */}
            </div>
        )
    }
}

export default ConsoleLogObject;