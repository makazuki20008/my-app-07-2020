import React from 'react';

var ChildA = () => {
    return (<div>a</div>);
}
var ChildB = () => {
    return (<div>b</div>);
}
var ChildC = () => {
    return (<div>c</div>);
}

class ReactJSFrament extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
          <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
          </React.Fragment>
        );
      }

    // short syntax
    // render() {
    //     return(
    //         <>
    //             <ChildA />
    //             <ChildB />
    //             <ChildC />
    //         </>
    //     )
    // }
}

export default ReactJSFrament;
