import React from 'react';

function DTPC(props) {
    return(
        <div>
            <p>{props.length}</p>
            <div>
                {props.products.map(x=>(x.id))}
            </div>
        </div>
    );
};

export default DTPC;