import React from 'react';
import splashMoneyCaculatorIcon from './Images/splash.jpg';
import './splash.css';

class splassMoneyCaculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div class="splash-money-caculator-screen">
                <img class="money-caculator-icon" src={splashMoneyCaculatorIcon} alt="splash money caculator"/>
            </div>
        )
    }
}

export default splassMoneyCaculator;