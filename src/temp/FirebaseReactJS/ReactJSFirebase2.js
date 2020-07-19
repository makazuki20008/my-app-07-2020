import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-firebase'
 
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

//firebase.initializeApp(config);
 
const Counter2 = ({ value, setValue }) => (
  <div>
    <button onClick={() => setValue(value - 1)}>-</button>
    <span>{value}</span>
    <button onClick={() => setValue(value + 1)}>+</button>
  </div>
)
 
export default connect((props, ref) => ({
  value: 'counterValue',
  setValue: value => ref('counterValue').set(value)
}))(Counter2)