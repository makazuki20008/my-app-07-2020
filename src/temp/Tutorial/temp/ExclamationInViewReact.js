import React from 'react';

const isShow = true;

function ExclamationReact() {
    return(
        <div>
            {/* if isShow false print <div>Hello</div> */}
            {/* if isShow true don't print <div>Hello</div> */}
            {!isShow && (<div>Hello</div>)}
            This is show!
        </div>
    );
};

export default ExclamationReact;