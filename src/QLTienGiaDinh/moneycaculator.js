import React from 'react';
import './moneycaculator.css';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', password: ''};
  
      this.usernameChange = this.usernameChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    usernameChange(event) {
      this.setState({ username: event.target.value});
    }
    
    passwordChange(event) {
        this.setState({ password: event.target.value})
    }

    handleSubmit(event) {
      var username = this.state.username;
      var password = this.state.password;

      // so khớp username với list username trong csdl
      // so khớp password với list password trong csdl
      
      if(username==="binhan"&&password==="123")
        console.log("login done");

      event.preventDefault(); // event là dữ liệu từ form, là các sự kiện mà tag html mang phương thức đang có 
    }
  
    // onSubmit là hành động khi input submit được ấn
    render() {
      return (
        <form class="login" onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.usernameChange} />
            Password:
            <input type="password" value={this.state.password} onChange={this.passwordChange} />
          </label>
          <input type="submit" value="Login" />
        </form>
      );
    }
  }

// Không thể handle value
// class Login extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         };

//         // this.usernameChange = this.usernameChange.bind(this);
//         // this.passwordChange = this.passwordChange.bind(this);
//         // this.onClickHandle = this.onClickHandle.bind(this);
//     };

//     username = '';
//     password = '';

//     usernameChange = (username) => {
//         this.username = username;
//         this.setState({ username: username});
//     }

//     passwordChange = (password) => {
//         this.password = password;
//         this.setState({ password: password});
//     }

//     onClickHandle = () => {
//         console.log(this.username);
//         console.log(this.password);
//     };

//     // component change input control to uncontrol
//     // input can't change uncontrol to control
//     render(){
//         return(
//             <div class="login">

//                 Username:
//                 <input type="text" name="username" value={this.state.username} onChange={e => this.usernameChange(e.target.input)} /><br />
//                 Password:
//                 <input type="password" name="password" value={this.state.password} onChange={e => this.passwordChange(e.target.input)}/><br />
//                 <input type="submit" value="Login" onClick={() => this.onClickHandle()}/>
//             </div>
//         );
//     };
// };

class MoneyCaculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { money: ''}
    }
    render() {
        return(
            <div class="main-caculator">
                <Login></Login>
            </div>
        )
    }
}

export default MoneyCaculator;