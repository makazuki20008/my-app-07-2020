import React from 'react';
import DTPC from './DataToPropsChild';

var products = [{id:1},{id:2},{id:3},{id:4},{id:5}];

function DataToProps() {
    return(
        <DTPC ProductLength={products.length} Products={products}/>
    );
};

export default DataToProps;