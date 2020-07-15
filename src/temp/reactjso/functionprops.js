import React from 'react';

function Candy(props) {
    return(
        <div>
            {props.name}
        </div>
    )
}

function Table() {
    return(
        <div>
            <Candy name="Batorita" />
            <Candy name="Limte" />
            <Candy name="Xamiso" />
        </div>
    )
}

export default Table;