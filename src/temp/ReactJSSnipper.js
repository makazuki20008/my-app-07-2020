import React, { Component } from 'react';

class ReactJSSnipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return (
            <div>
                rcc - class <br/>
                con - constructor() <br/>
                est - this.state = ()<br/><br/>

                ren - render()<br/>
                ssf - this.setState {/* this.setState((state, props) => { return {  }}); */}<br/><br/>

                state - this.state <br/>
                props - this.props<br/>

                sst - this.setState()<br/>
                bnd - bind(this)<br/><br/>
                
                cwm - componentWillMount<br/>
                cdm - componentDidMount<br/>
                cdup - componentDidUpdate<br/>
                cwup - componentWillUpdate<br/>
                cdc - componentDidCatch<br/>
            </div>
        );
    }
}

export default ReactJSSnipper;
