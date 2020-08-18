import React from 'react';

var a = ({people: {name: 'An', old: 27}},{people: {name: 'Phuong', old: 30}});
var k = a.animal?.name;
var o = a.people?.name;

class ExpressionsIsNullObjectNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                { k } - { o }
            </div>
        )
    }
}

export default ExpressionsIsNullObjectNode;