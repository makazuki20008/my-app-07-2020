import React from 'react';
import ReactFireBase from './ReactJSFirebase3';
import FirebaseRealtime from './2.FirebaseRealtime';
import FirebaseCloud from './3.FirebaseCloud';

class FirebaseReactJS extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <ReactFireBase></ReactFireBase>
                <FirebaseRealtime></FirebaseRealtime>
                <FirebaseCloud></FirebaseCloud>
            </div>
        )
    }
}

export default FirebaseReactJS;