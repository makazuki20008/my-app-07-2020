import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-firebase'
 
//firebase.initializeApp({
  //databaseURL: 'https://moneycaculator-360b9.firebaseio.com'
  //databaseURL: 'https://react-firebase-sandbox.firebaseio.com'
//})
 
const Counter = ({ value, setValue }) => (
  <div>
    <button onClick={() => setValue(value - 1)}>-</button>
    <span>{value}</span>
    <button onClick={() => setValue(value + 1)}>+</button>
  </div>
)
 
// công việc Counter
// counst Counter -> value, setValue: thay đổi value
// value là dữ liệu
// setValue là thay đổi dữ liệu

// tên dữ liệu từ value là counterValue
// công việc của setValue là thay đổi counterValue -> counterValue = value

export default connect((props, ref) => ({
  value: 'counterValue', // value cũng chính là value ở const Counter (value, ...)  // đặt giá trị cho value ở const Counter
  // value của firebase
  // lấy về counterValue
  setValue: value => ref('counterValue').set(value) // value là value ở const Counter (..., setValue) // set giá trị cho value ở connect // setValue(value - 1)
  //        value của const Counter
  // thay đổi counterValue

  // vế trước : vế sau
  // vế trước là giá trị firebase
  // vế sau là giá trị thay đổi của firebase, thêm là được áp dụng cho biến số trong const Counter

  // truy cập vào setValue ở const Counter lấy ra value ở const Counter
}))(Counter)

// counterValue
// setValue = setCounterValue

// 

// counterValue is property

//exd connect(value, setValue)(Counter)
//value tên là counterValue 
//setValue là công việc ref('counterValue').set()
//ref là cách React truy cập tới DOM