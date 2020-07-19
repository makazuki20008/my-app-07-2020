import React from 'react';

function Baitap() {
    return (
        <div>
            <h1>Bai tap</h1>
            {element}
        </div>
    )
}

// function duoc khoi tao voi mo ta du lieu dau vao la user
// return mo ta du lieu user.firstName, user.lastName
function formatName(user) {
    return user.firstName + " " + user.lastName;
}

// data json duoc tao bang const
// data json duoc ngoac {} boc cac doi tuong json gom firstName: "Noidungfirstname" va lastName:"Noidunglastname"
const user = {
    firstName: 'Binh',
    lastName: 'An',
}

// element duoc khoi tao bang const va boc trong ( noi dung html )
// {} dung de khai bao su dung function trong giao dien
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
)

// function return with exist variable data input
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;  }
    return <h1>Hello, Stranger.</h1>;
}

// element create with createElement
const element1 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

export default Baitap;