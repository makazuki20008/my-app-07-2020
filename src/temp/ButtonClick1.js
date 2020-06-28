import React from 'react';

class ButtonReact extends React.Component {
    render() {
        return(
            <button onClick={ClickButton}>RJS</button>
        )
    }
}

function ClickButton() {
    alert("click");
}

function ButtonInReactPage() {
    return(
        <div>
            Button in ReactJS.
            <br/>
            <ButtonReact></ButtonReact>
            <br/>
            <button onClick={ClickButton}>Click</button>
        </div>
    )
}

export default ButtonInReactPage;