import React from 'react';

const ListPhims = [
    {
        name: "Ve binh dai ngan ha",
        year: "2017"
    },
    {
        name: "Transformer",
        year: "2020"
    }
]

function ShowArrayWithPure() {
    return(
        <ul>
            {ListPhims.map((phim)=><li>{phim.name} - {phim.year}</li>)}
        </ul>
    )
}

export default ShowArrayWithPure;