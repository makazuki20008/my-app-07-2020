import React from 'react';

var clickHandle = () => {
    alert('Hangle is variable same');
}

var ClickHandleElement = () => {
    return(
        <div onClick={clickHandle}>Click me</div>
    )
}

export default ClickHandleElement;