import React, { Component } from 'react';
import { PrimaryButton } from '@fluentui/react';
  
class FluentUIReact extends Component {
    _alertClicked = () => {

    }
    render() {
        return (
            <div>
                <PrimaryButton text="Primary" onClick={this._alertClicked} />
            </div>
        );
    }
}

export default FluentUIReact;

