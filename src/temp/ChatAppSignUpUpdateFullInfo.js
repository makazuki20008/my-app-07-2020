import React from 'react';
import './ChatAppSignUpUpdateFullInfo.css';

class ChatAppSignUpUpdateFullInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            gender: '1',
            birthday: '',
            phonenumber: '',
            email: '',
            address: '',
            submit: '',

            fullnameValidate: '',
            genderValidate: '1',
            birthdayValidate: '',
            phonenumberValidate: '',
            emailValidate: '',
            addressValidate: '',
            submitValidate: ''
        };

        this.fullnameHandle = this.fullnameHandle.bind(this);
        this.genderHandle = this.genderHandle.bind(this);
        this.birthdayHandle = this.birthdayHandle.bind(this);
        this.phonenumberHandle = this.phonenumberHandle.bind(this);
        this.emailHandle = this.emailHandle.bind(this);
        this.addressHandle = this.addressHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }

    fullnameHandle(e) {
        this.setState({ fullname: e.target.value });
    }

    genderHandle(e) {
        this.setState({ gender: e.target.value });
    } 

    birthdayHandle(e) {
        this.setState({ birthday: e.target.value });
    }

    phonenumberHandle(e) {
        this.setState({ phonenumber: e.target.value });
    }

    emailHandle(e) {
        this.setState({ email: e.target.value });
    }

    addressHandle(e) {
        this.setState({ address: e.target.value });
    }

    submitHandle() {
        if(this.state.fullname === '') this.setState({ fullnameValidate: 'Trường không được để trống' }); else this.setState({ fullnameValidate: '' });
        if(this.state.birthday === '') this.setState({ birthdayValidate: 'Vui lòng chọn ngày sinh' }); else this.setState({ birthdayValidate: '' });
        if(this.state.phonenumber === '') this.setState({ phonenumberValidate: 'Trường không được để trống' }); else this.setState({ phonenumberValidate: '' });
        if(this.state.email === '') this.setState({ emailValidate: 'Trường không được để trống'}); else this.setState({ emailValidate: '' });
        if(this.state.address === '') this.setState({ addressValidate: 'Trường không được để trống' }); else this.setState({ addressValidate: '' });

        // if(this.state.fullname chứa kí tự đặt biệt hay gọi là khác a-z A-Z 0-9 chữ có dấu)
        // if(this.birthday < 1800 || this.birthday > 2020) this.setState({ birthdayValidate: 'Vui lòng chọn số tuổi đúng với thực tế' });
        if(this.state.phonenumber !== '' && this.state.phonenumber.trim().length > 10) this.setState({ phonenumberValidate: 'Số điện thoại này không tồn tại' });

        var emailMatch = '';
        if(this.state.email.match(/@/gi) !== null && this.state.email.match(/@/gi).length === 1) 
            emailMatch = this.state.email.match(/@/gi)[0];
        if(this.state.email !== '' && emailMatch !== "@") this.setState({ emailValidate: 'Email không đúng định dạng' });
        // nếu đúng thì match sẽ mang giá trị ["@"]
        // nếu sai thì match sẽ không mang giá trị ["@"]
        // không thể kiểm tra match phải kiểm tra qua [0]
        // chỉ kiểm tra qua [0] khi match có giá trị [0]
        // không thể bắt trường hợp match [0] null

        if(this.state.address !== '' && this.state.address.trim().length < 7) this.setState({ addressValidate: 'Địa chỉ không có thật' });

        console.log({ login: {
                fullname: this.state.fullname,
                gender: this.state.gender,
                birthday: this.state.birthday,
                phonenumber: this.state.phonenumber,
                email: this.state.email,
                address: this.state.address
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
                    
                    <form id="chat-signup">
                        <h2><span>Thông tin chi tiết</span></h2>

                        <p>Họ tên: </p><input class="fullname" type="text" name="fullname" value={this.state.fullname} onChange={this.fullnameHandle}/><br/>
                        <p class="validate"><i>{this.state.fullnameValidate}</i></p>

                        <p>Giới tính: </p>
                        <select name="gender" id="gender" onChange={this.genderHandle}>
                            <option value="1" selected="selected">Nam</option>
                            <option value="0">Nữ</option>
                        </select><br/>

                        <p>Ngày sinh:</p><input type="date" name="birthday" placeholder="dd-mm-yyyy" value={this.state.birthday} onChange={this.birthdayHandle}/><br/>
                        <p class="validate"><i>{this.state.birthdayValidate}</i></p>

                        <p>Số điện thoại:</p><input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.phonenumberHandle}/><br/>
                        <p class="validate"><i>{this.state.phonenumberValidate}</i></p>

                        <p>Email:</p><input class="email" type="text" name="email" value={this.state.email} onChange={this.emailHandle}/><br/>
                        <p class="validate"><i>{this.state.emailValidate}</i></p>

                        <p>Địa chỉ:</p><input class="address" type="text" name="address" value={this.state.address} onChange={this.addressHandle}/><br/>
                        <p class="validate"><i>{this.state.addressValidate}</i></p>

                        <input class="signup-submit" type="button" value="Hoàn tất đăng ký" onClick={this.submitHandle}/>
                    </form>   

            </div>
        )
    }
}

export default ChatAppSignUpUpdateFullInfo;