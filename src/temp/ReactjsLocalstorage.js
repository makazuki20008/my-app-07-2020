import React from 'react';

class ReactjsLocalstorage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
    }
    componentDidMount() {
        localStorage.setItem('name', 'An');
    }
    render() {
        return(
            <div>Local storage {localStorage.getItem('name')}</div>
        )
    }
}

export default ReactjsLocalstorage;