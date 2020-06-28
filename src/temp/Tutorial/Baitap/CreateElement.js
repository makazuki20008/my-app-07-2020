import React from 'react';

const element = React.createElement(
    'h1',
    {className:"createElement"},
    "Hello createElement()"
);

const element2 = React.createElement(
    'h1',
    {className:"createElement"},
    "Hello createElement()2"
);

const element3 = React.createElement(
    'h1',
    {className:"createElement"},
    "Hello createElement()3"
);

const element4 = React.createElement(
    'h1',
    {className:"createElement"},
    "Hello createElement()4"
);

const element5 = React.createElement(
    'h1',
    {className:"createElement"},
    "Hello createElement()5"
);

function CreateElement() {
    return(
        <div>
            {element}
            {element2}
            {element3}
            {element4}
            {element5}
        </div>
        
    );
};

export default CreateElement;