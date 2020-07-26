import React from 'react';

//var mElen = () => (<div>This is: <Elen arem="LEN"></Elen></div>)
//var mElen = <div>This is mElen</div>;

class MElen extends React.Component {
    render() {
        return(
            <div>mElen</div>
        )
    }
}

var Elen = ({arem}) => {
    return(
        <div>{arem}</div>
    )
}

export default MElen;