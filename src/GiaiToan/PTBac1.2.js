import React from 'react';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';
import { getAllByAltText } from '@testing-library/react';

class GiaiPTBac1Cach2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {a: '', b: '', ketqua: ''}
    }

    getA = a => {
        this.setState({a});

        this.setState({ketqua: (-parseInt(this.state.b)/parseInt(this.state.a)).toString()});
    }

    getB = b => {
        this.setState({b});

        this.setState({ketqua: (-parseInt(this.state.b)/parseInt(this.state.a)).toString()});
    }

    Tinh = () => {
        this.state.ketqua = (-parseInt(this.state.b)/parseInt(this.state.a)).toString();
        this.setState({ketqua: this.state.ketqua});
    }

    render() {
        return(
            <div>
                <p>{this.state.a}</p>
                <p>{this.state.b}</p>
                <p>{this.state.ketqua}</p>
                <input name="a" value={this.state.a} onChange={e => this.getA(e.target.value)} />x + <input name="b" value={this.state.b} onChange={e => this.getB(e.target.value)}/> = <input name="ketqua" value={this.state.ketqua} />
                <button name="submit" onClick={() => this.Tinh()}>Tính</button>
            </div>
        )
    }
}

export default GiaiPTBac1Cach2;

//khai báo state dùng constructor(props){ super(props); this.state = { a: '', b: '' }}, this.state = một mảng object json, mảng object json chứa các con tên_con: 'nội_dung'
//gọi method trong class phải dùng this.tên_method
//gọi đến hàm bên trong class phải dùng this.tên_hàm
//muốn thay đổi nội dung this.setState({tên_state}) dùng arrow function with value để thay đổi
//arrow function with value a => { this.setState({ tên_state }) }, dữ liệu a chảy tự động vào state hay a -> tên_state
//arrow function để method không tự động gọi đến mỗi khi load page



// class StateInClass extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { input: "" }
//     }

//     updateInput = input => {
//         this.setState({ input })
//     }

//     doSomething = () => {
//         alert("Pure function")
//     }

//     render() {
//         return(
//             <div>
//                 <p>{this.state.input}</p>
//                 <input onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
//                 <button onClick={()=>this.doSomething()}>Submit</button>
//             </div>
//         )
//     }
// }

// bất cứ attribute nào trong jsx đều có thể sử dụng code javascript với {} sau dấu =
// xác định được attribute nào nhận dữ liệu về
// xác định được attribute nào gửi dữ liệu đi || attribute nào thực thi dữ liệu