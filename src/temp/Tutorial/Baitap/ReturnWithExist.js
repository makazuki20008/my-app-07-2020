import React from 'react';

function formatName(user) {
    return user.firstName + " " + user.lastName;    
}

const user = {
    firstName: "Binh",
    lastName: "An"
}

function Greeting(user) {
    if(user)
        return <h1>Hello, {formatName(user)}!</h1>
    else return <h1>Hello, stranger.</h1>
}

export default Greeting;