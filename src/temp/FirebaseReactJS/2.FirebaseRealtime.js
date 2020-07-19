// More infomation ReactJSFireBase3.js
import React from 'react';
import firebase from '../../firebaseConnect';

class FirebaseRealtime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fire: '' };
    };

    // Once at loaded page do!
    componentDidMount() {
    //----------------------------------------------------------------------------------------------------------------
        // console.log(firebase.database().ref('counterValue').on('value',(snapshot)=>{snapshot.val()}));
        // null

        // firebase.database().ref('counterValue').once("value").then(snapshot => { this.valuef = snapshot.val(); });
        // Console Error: client doesn't have permission to access the desired data firebase
        // Solution: edit ruler read, write set true
    //----------------------------------------------------------------------------------------------------------------
 
        const counterValue = firebase.database().ref('counterValue');

        // is true 1
        counterValue.on('value', (snapshot) => {
            let count = snapshot.val();
            this.setState({ fire: count});
        });
        
        // Short map:
        // firebase-data -> counterValue: 5
        // Collection    -> ref( counterValue ) -> ( value <-> snapshot.val() )

    };

    render() {
        return(
            <div>
                {this.state.fire}
            </div>
        )
    };
}

export default FirebaseRealtime;