// https://medium.com/@thevatsalsaglani/working-with-firebase-real-time-database-using-reactjs-and-uikit-and-launching-to-netlify-ff92419289b2
// Vatsal Saglani

// Firebase documents offical
// https://firebase.google.com/docs/firestore/query-data/get-data#web_4

// Stackoverflow -
//
// Can't fetch firebase collection with React
// Questioner: Alfrex92; Answered: Frank van Puffelen;
// https://stackoverflow.com/questions/55561358/cant-fetch-firebase-collection-with-react
//
// How can I get specific document data from firestore querysnapshot?
// https://stackoverflow.com/questions/50692218/how-can-i-get-specific-document-data-from-firestore-querysnapshot

import React from 'react';
import firebase from '../../firebaseConnect';

class ReactFireBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fire: '' };
    };

    valuef = "";

    // Once at loaded page do!
    componentDidMount() {
    //----------------------------------------------------------------------------------------------------------------
        // console.log(firebase.database().ref('counterValue').on('value',(snapshot)=>{snapshot.val()}));
        // null

        // firebase.database().ref('counterValue').once("value").then(snapshot => { this.valuef = snapshot.val(); });
        // Console Error: client doesn't have permission to access the desired data firebase
        // Solution: edit ruler read, write set true
    //----------------------------------------------------------------------------------------------------------------
        
        // firebase.db.collection('LoginTest').get().then(snap => {
        //     let count = snap.val();
        //     this.setState({ fire: count});
        // });



        
        //console.log(citiesRef.where('KimPhuong', '==', true).get());

        

        // if (snapshot.empty) {
        // console.log('No matching documents.');
        // return;
        // }  

        
        // snapshot.forEach(doc => {
        //     console.log(doc.data());
        // });

            
        // snapshot.forEach(doc => {
        //     console.log(doc.id, '=>', doc.data());
        // });


    //----------------------------------------------------------------------------------------------------------------
        // Realtime Database (old)
        // is true 1 with Realtime Database
        const counterValue = firebase.database().ref('counterValue');

        // is true 1
        counterValue.on('value', (snapshot) => {
            let count = snapshot.val();
            this.setState({ fire: count});
        });

        // Short map:
        // firebase-data -> counterValue: 5
        // Collection    -> ref( counterValue ) -> ( value <-> snapshot.val() )
        
    //----------------------------------------------------------------------------------------------------------------







    //----------------------------------------------------------------------------------------------------------------
        // Cloud Database (new)
        // is true 2 with Cloud Database
        // const citiesRef = firebase.firestore().collection('LoginTest');
        // citiesRef.where('username', '==', 'binhan').get().then(snapshot => {
        //     if (snapshot.empty) {
        //       console.log('No matching documents.');
        //       return;
        //     }  
        
        //     snapshot.forEach(doc => {
        //       console.log(doc.id, '=>', doc.data());
        //     });
        //   })
        //   .catch(err => {
        //     console.log('Error getting documents', err);
        //   });;

        // Short map - short value:
        //  Collection  -> DocumentID( username , password )
        // 'LoginTest'  -> BinhAn(username: 'binhan', password: '123')

        // Variable map:
        // var db = {
        //     collection: {
        //         documentID1: {
        //             username: 'username_value',
        //             password: 'password_value'
        //         },
        //         documentID2: {
        //             username: 'username_value',
        //             password: 'password_value'
        //         },
        //         documentID3: {
        //             username: 'username_value',
        //             password: 'password_value'
        //         },
        //         documentID4: {
        //             username: 'username_value',
        //             password: 'password_value'
        //         },
        //         documentID5: {
        //             username: 'username_value',
        //             password: 'password_value'
        //         },
        //         documentID6: {
        //             username: 'username_value',
        //             password: 'password_value'
        //         },
        //         documentID7: {
        //             username: 'username_value',
        //             password: 'password_value'
        //         }
        //     }
        // }

    //----------------------------------------------------------------------------------------------------------------








    

    };

    render() {
        return(
            <div>
                {this.state.fire}
            </div>
        )
    };
}

export default ReactFireBase;