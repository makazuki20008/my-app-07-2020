import React from 'react';

class ButtonReact extends React.Component {
    render() {
        return (
            <button onClick={ClickButton}>RJS2</button>
        )
    }
}

function ClickButton() {
    alert("click");
}

function ButtonInReactPage2() {
    return (
        <div>
            Button in ReactJS.
            <br />
            <ButtonReact></ButtonReact>
            <br />
            <button onClick={() => alert("click2")}>Click2</button>
        </div>
    )
}

export default ButtonInReactPage2;

// alert with arrow function