import React from 'react';

function formatName(user) {
    return user.firstName + " " + user.lastName;
};

const user = {
    firstName: "Binh",
    lastName: "An"
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function FormatNameElement() {
    return (
        <div>
            {element}
        </div>
    );
};

export default FormatNameElement;