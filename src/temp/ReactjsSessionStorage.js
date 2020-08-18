import React from 'react';

class ReactjsSessionStorage extends React.Component {
    componentDidMount() {
        window.sessionStorage.setItem("sstorage", "ssrg");
    }
    render() {
        return(
            <div>Session storage {window.sessionStorage.getItem("sstorage")}</div>
        )
    }
}

export default ReactjsSessionStorage;