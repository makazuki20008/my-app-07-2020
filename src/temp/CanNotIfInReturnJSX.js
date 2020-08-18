import React, { Component } from 'react';

class CanNotIfInJSX extends Component {
    render() {
        return (
            <div>
                if(this.props.messenger != null) // can not if in JSX

                using
                render() if() return 1; else return 2;
            </div>
        );
    }
}

export default CanNotIfInJSX;