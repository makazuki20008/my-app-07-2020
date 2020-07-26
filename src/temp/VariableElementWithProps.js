import React from 'react';

const Product = ({products}) => {
    return(
        products.map(x => { return ( <div>{x.name}</div> ) })
    )
}

class VariableElementWithProps extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products: [
                { name: 'iPhone', price: '200' },
                { name: 'Samsung', price: '210' },
                { name: 'LG', price: '300' }
            ]
        }
    }
    render() {
        return(
            <Product products={this.state.products}></Product>
        )
    }
}

export default VariableElementWithProps;