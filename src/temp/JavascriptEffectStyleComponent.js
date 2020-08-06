import React from "react"; 

class EffectStyleByJavascript extends React.Component {

    changeColor = () => {
        document.getElementById('input').style.backgroundColor = "red";
    }
    render() {
        return(
            <div>
                <input id="input" type="submit" onFocus={this.changeColor.bind(this)}/>
            </div>
        )
    }
}

export default EffectStyleByJavascript;