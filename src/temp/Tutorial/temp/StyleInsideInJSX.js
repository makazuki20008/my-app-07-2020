import React from 'react';
import { Redirect } from 'react-router-dom';

function StyleInsideInJSX() {
    return(
        <div>
            <div style={{ backgroundColor: 'red', width: 100, height: 100 }}></div>
        </div>
    )
}

export default StyleInsideInJSX;