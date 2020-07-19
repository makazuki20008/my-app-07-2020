import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB99gzeEDYi3vsOLgtKULomK8riCH-8D3I",
    authDomain: "moneycaculator-360b9.firebaseapp.com",
    databaseURL: "https://moneycaculator-360b9.firebaseio.com",
    projectId: "moneycaculator-360b9",
    storageBucket: "moneycaculator-360b9.appspot.com",
    messagingSenderId: "398455561201",
    appId: "1:398455561201:web:91865895cf357c31624250",
    measurementId: "G-FEF80L1P7X"
};

//firebase.initializeApp(config); // only one connect in app, main is src/firebase.js
export default firebase;