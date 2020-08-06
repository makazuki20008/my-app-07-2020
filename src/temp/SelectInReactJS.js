import React from 'react';

var option = ['1','2','3','4','5'];

var SelectOption = () => (
    option.map(x => (<option>{x}</option>))
);

class SelectInReactJS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    selectHandle = (event) => {
        alert(event.target.value);
    }
    render() {
        return(
            <div>
                <select onChange={this.selectHandle}>
                    <SelectOption></SelectOption>
                </select>
            </div>
        )
    }
}

export default SelectInReactJS;