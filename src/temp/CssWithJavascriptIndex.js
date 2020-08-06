import React from 'react';
import { styleMain, styleOne, styleTwo, styleList, styleListTitle } from './CssWithJavascriptCss';

class CSSWithJavascript extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div style={styleMain}>
                <div style={styleOne}>
                    <ul style={styleList}>
                        <li style={styleListTitle}>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                    </ul>
                </div>
                <div style={styleTwo}></div>
            </div>
        )
    }
}

export default CSSWithJavascript;