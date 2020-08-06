// Tất tần tật về Promise
// https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await
import React from 'react';

var User = (function(){
    var id = '10';
    var getId = () => { return id };
    var setId = (_id) => { return id = _id };

    return {
        getId: getId,
        setId: setId
    }

})();

// var Session = (function() {
//     var username = "";
//  
//     var getUsername = function() {
//       return username;    // Or pull this from cookie/localStorage
//     };
//  
//     var setUsername = function(_username) {
//       username = _username;     
//       // Also set this in cookie/localStorage
//     };
//  
//     return {
//       getUsername: getUsername,
//       setUsername: setUsername
//     }
//  
//   })();
//
// User sẽ là một biến khởi tạo bởi "function of function" ()()
// var user = ()();
//
// Bên trong () thứ nhất sẽ có 1 function
// var user = ({})(  );
//
// Function bên trong () thứ 1 chứa 
//            Dữ liệu 
//            Phương thức tương tác với dữ liệu
//
// Cấu trúc function bên trong () thứ 1
// Dữ liệu
// func lấy dữ liệu
// func set dữ liệu
// cho phép các func bên trong được sử dụng bằng khai báo: function() { return { tên_func1: tên_func1, tên_func2: tên_func2 } }

// then sử dụng khi nó là function Promise



class ThenWhenGetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    clickHandle = () => {
        // User.getId().then(res => {res = res + " then"; console.log(res); }).catch(err => console.log(err));
        Promise.resolve(12)
        .then(result => console.log(result)) // 12
        .then(() => { console.log("this is then") })
        .then(function() { console.log("this is then of then") })
        .then(res => Promise.reject(new Error('Dừng lại nhanh')))
        .then(() => 'Cười thêm phát nữa là tym anh đứt phanh')
        .catch(err => console.error(err)) // Error: Dừng lại nhanh
    }
    render() {
        return(
            <div>ThenWhenGetData
                <button onClick={this.clickHandle}>Submit</button>
            </div>
        )
    }
}

export default ThenWhenGetData;