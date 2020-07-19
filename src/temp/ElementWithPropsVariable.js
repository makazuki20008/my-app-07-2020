import React from 'react';

var foods = ['banana','apple','tomato'];

var Image = ({foods}) => { return(<div>{foods.map(x => {return(<li>{x}</li>);})}</div>) }

function FoodPage() {
    return(
        <Image foods={foods} />
    )
}

export default FoodPage;