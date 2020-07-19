// More infomation ReactJSFireBase3.js
// Firebase documents offical
// https://firebase.google.com/docs/firestore/query-data/get-data#web_4
import React from 'react';
import firebase from '../../firebaseConnect';

class FirebaseCloud extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fire: '' };
    };

    // Once at loaded page do!
    componentDidMount() {

        const stateArray = [];
        // is true 2 with Cloud Database
        const citiesRef = firebase.firestore().collection('LoginTest');
        citiesRef.where('username', '==', 'binhan').get().then(snapshot => {
            if (snapshot.empty) {
              console.log('No matching documents.');
              return;
            }  
        
            snapshot.forEach(doc => {
              //console.log(doc.id, '=>', doc.data());
              stateArray.push(doc.data());
            });

            //this.setState({ stateArray });
            console.log(stateArray);

          })
          .catch(err => {
            console.log('Error getting documents', err);
          });;

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

    };

    render() {
        return(
            <div>
               
            </div>
        )
    };
}

export default FirebaseCloud;