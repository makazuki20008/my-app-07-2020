import React from 'react';

export const formatPrice = (x, currency) => {
    switch (currency) {
      case 'BRL':
        return x.toFixed(2).replace('.', ',');
      default:
        return x.toFixed(2);
    }
  };

export function formatPriceR(x,currency) {
    switch(currency) {
        case 'BRL': 
            return x.toFixed(2).replace('.',',');
        default:
            return x.toFixed(2);
    }
};

function CodeGround() {
    return(
        <div>
            <h1>{formatPriceR(10,'VND')}</h1>
            <h1>{formatPriceR(13.5,'BRL')}</h1>
            <h1>{formatPriceR(15.76,'VND')}</h1>
            <h1>{formatPriceR(17,'VND')}</h1>
            <h1>{formatPriceR(18.55,'VND')}</h1>
        </div>
    )
}

export default CodeGround;
