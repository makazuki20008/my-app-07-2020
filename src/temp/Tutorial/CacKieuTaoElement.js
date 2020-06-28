import React from 'react';
//1
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

//2
const element2 = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);


//3
// Note: this structure is simplified
const element3 = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};













const LabelName1 = (
    <span>Full Name: </span>
)

const InputName1 = (
    <input name="InputName" placeholder="Full Name"/>
)

const LabelName2 = React.createElement(
    'p',
    {className: 'LabelName'},
    'Full Name'
)

const InputName2 = React.createElement(
    'input',
    {className: 'InputName'},
)

function FormLogin() {
    return(
        <div>
            {LabelName1} {InputName1}  {LabelName1} {InputName1}
        </div>
    )
}










export default FormLogin;