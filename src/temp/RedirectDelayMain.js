import React from 'react';
import RedirectDelayIndex from './RedirectDelayIndex';
import RedirectDelaySplash from './RedirectDelaySplash';

class RedirectDelayMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splashView: false
        };
    }
    
    componentDidMount() {
        setTimeout(()=>{
            this.setState({splashView: true});
        }, 1280);
    }

    render() {
        if(this.state.splashView)
            return(<RedirectDelayIndex></RedirectDelayIndex>);
        else
            return(<RedirectDelaySplash></RedirectDelaySplash>);
    }
}

export default RedirectDelayMain;