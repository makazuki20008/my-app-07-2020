import React from 'react';

class ReactComponentProperties extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

    render() {
        return(
            <div>
                React.Component Properties
            </div>
        )
    }
}

export default ReactComponentProperties;

    // //mounting
    // constructor()
    // static getDerivedStateFromProps()
    // render()
    // componentDidMount()

    // //update
    // static getDerivedStateFromProps()
    // shouldComponentUpdate()
    // render()
    // getSnapshotBeforeUpdate()
    // componentDidUpdate()

    // //unmounting
    // componentWillUnmount()

    // //error handing
    // static getDerivedStateFromError()
    // componentDidCatch()

    // // orther API
    // setState()
    // forceUpdate()

    // // class properties
    // defaultProps
    // displayName

    // // instance properties
    // props
    // state