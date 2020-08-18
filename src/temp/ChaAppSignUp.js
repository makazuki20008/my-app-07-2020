import React from 'react';
import './ChatAppSignUp.css';

class ChatAppSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',

            usernameValidate: '',
            passwordValidate: '',
            emailValidate: '',
        };

        this.usernameHandle = this.usernameHandle.bind(this);
        this.passwordHandle = this.passwordHandle.bind(this);
        this.emailHandle = this.emailHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }

    usernameHandle(e) {
        this.setState({ username: e.target.value });
    }

    passwordHandle(e) {
        this.setState({ password: e.target.value });
    } 

    emailHandle(e) {
        this.setState({ email: e.target.value });
    }

    submitHandle() {
        // username đã tồn tại // username chứa kí tự đặt biệt
        // password bảo mật thấp
        // email sai định dạng
        if(this.state.username === '') this.setState({ usernameValidate: 'Vui lòng nhập username' }); else this.setState({ usernameValidate: '' });
        if(this.state.password === '') this.setState({ passwordValidate: 'Vui lòng điền password' }); else this.setState({ passwordValidate: '' });
        if(this.state.email === '') this.setState({ emailValidate: 'Vui lòng nhập email'}); else this.setState({ emailValidate: '' });

        if(this.state.password.length < 6) this.setState({ passwordValidate: 'Mật khẩu quá ngắn' });
        // không chứa kí tự đặt biệt
        
        var emailMatch = '';
        if(this.state.email.match(/@/gi) !== null && this.state.email.match(/@/gi).length === 1) 
            emailMatch = this.state.email.match(/@/gi)[0];
        if(this.state.email !== '' && emailMatch !== "@") this.setState({ emailValidate: 'Email không đúng định dạng' });
        // nếu đúng thì match sẽ mang giá trị ["@"]
        // nếu sai thì match sẽ không mang giá trị ["@"]
        // không thể kiểm tra match phải kiểm tra qua [0]
        // chỉ kiểm tra qua [0] khi match có giá trị [0]
        // không thể bắt trường hợp match [0] null

        console.log({ signup: {
                fullname: this.state.fullname,
                password: this.state.gender,
                email: this.state.email,
            }
        });
    }

    render() {
        return(
            <div>

            {/* avatar ()      user:  binhan4321 ()
                        password: ************** ()

                        Thông tin cá nhân:
                            Họ tên: Lê Trịnh Bình An
                            Giới tính: Nam
                            Ngày sinh: 07/06/1993
                            Số điện thoại: 0934454432
                            Email: letirinhbinhan@gmail.com
                            Địa chỉ: tổ 3, thôn Phú Trung, xã Vĩnh Thạnh, TP.Nha Trang
                            Mã số bảo mật: 3214 */}
                    
                    {/* quy tắc đặt tên class: 1. chữ thường. 2. danh từ trước, động từ sau. 3. nối với nhau bằng dấu "-". */}
                    <form id="chat-signup">
                        <h2><span>Đăng ký</span></h2>

                        <p>Tên đăng nhập: </p><input class="input-username" type="text" name="username" value={this.state.username} onChange={this.usernameHandle}/><br/>
                        <p class="validate"><i>{this.state.usernameValidate}</i></p>

                        <p>Mật khẩu: </p><input class="input-password" type="password" name="password" value={this.state.password} onChange={this.passwordHandle}/><br/>
                        <p class="validate"><i>{this.state.passwordValidate}</i></p>

                        <p class="label-email">Hộp thư điện tử:</p>
                        <input class="email" type="text" name="email" value={this.state.email} onChange={this.emailHandle}/><br/>
                        <p class="validate"><i>{this.state.emailValidate}</i></p>

                        <input class="signup-submit" type="button" value="Nhập" onClick={this.submitHandle}/>
                    </form>   

            </div>
        )
    }
}

export default ChatAppSignUp;