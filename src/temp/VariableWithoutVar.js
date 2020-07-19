import React from 'react';



class VariableWithoutVar extends React.Component {
    
    // mo ta cho attribute cua VariableWitoutVar
    proceedToCheckout = () => {
        const {
          productQuantity,
          currencyFormat,
        } = this.props.cartTotal;
    
        if (!productQuantity) {
          alert('Add some product in the cart!');
        } else {
          alert(
            `Checkout - Subtotal: ${currencyFormat} `
          );
        }
      };

    render() {
        return(
            <div>hello</div>
        );
    };
}

export default VariableWithoutVar;