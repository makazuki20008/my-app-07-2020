import React from 'react';

class GetAttributeEvent extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    // target is get value of default attribute of element
    clickHandle = (event) => {
        console.log(event.target.id)
    }
    render() {
        return(
            <div>
                <input id="01" onClick={this.clickHandle}/>
            </div>
        )
    }
}

export default GetAttributeEvent;