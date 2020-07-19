import React from 'react';

function formatPrice(x,current) {
    switch(current) {
        case 'BRL':
            return x.toFix(2).replace('.',',');
        default:
            return x.toFix(2);
    }
}

function indexFP() {
    return(
        <div>
            <h1>{formatPrice(10,'VND')}</h1>
            <h1>{formatPrice(13.5,'BRL')}</h1>
            <h1>{formatPrice(15.76,'VND')}</h1>
            <h1>{formatPrice(17,'VND')}</h1>
            <h1>{formatPrice(18.55,'VND')}</h1>
        </div>
    );
};

export default indexFP;