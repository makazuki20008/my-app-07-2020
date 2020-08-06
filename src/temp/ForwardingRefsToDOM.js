import React from 'react';
import PropTypes from 'prop-types';

// gửi dữ liệu từ component ra xử lý ở function bên ngoài
// lấy dữ liệu từ component xử lý bên trong component


// https://viblo.asia/p/refs-in-react-tat-ca-nhung-gi-ban-can-biet-V3m5WOgQ5O7
// class RefsVibloChiThanhTraditional extends React.Component {
//     constructor() {
//       super();
//       this.state = {sayings: "" };
//     }
//     update(e) {
//       this.setState({sayings: e.target.value}); // sử dụng dữ liệu từ input bằng onChange
//     }
    
//     render() {
//       return (
//         <div>
//           Bob says <input type="text" onChange={this.update.bind(this)} />&nbsp;
//           {this.state.sayings}
//         </div>
//       );
//     }
//   }

// refs sẽ đặc trưng cho element khi tương tác ở code js
// class RefsVibloChiThanhUsingRef extends React.Component {
//     constructor() {
//         super();
//         this.state = {sayings: "" };
//     }
//     update(e) {
//         this.setState({sayings: this.refs.btalks.value}); 
//     }

//     render() {
//         return (
//         <div>
//             Bob says <input type="text" ref="btalks" onChange={this.update.bind(this)} />&nbsp;
//             {this.state.sayings}
//         </div>
//         );
//     }
// }

// bỏ qua 1 callback cho ref bằng cách đặt tên cho node đó
// class RefsVibloChiThanhUsingRefShort extends React.Component {
//     constructor() {
//         super();
//         this.state = {sayings: "" };
//     }
//     update(e) {
//         // this.setState({sayings: this.refs.btalks.value});
//         this.setState({sayings: this.a.value});
//     }

//     render() {
//         return (
//         <div>
//             Bob says <input type="text" ref={(node) => {this.a = node}} onChange={this.update.bind(this)} />&nbsp;
//             {this.state.sayings}
//         </div>
//         );
//     }
// }

// sử dụng ref khi nhóm các component lại với nhau
// nếu là thẻ html thì sử dụng this.refs.tên_ref
// nếu là component thì sử dụng ReactDOM.findDOMNode(this.refs.ref2)
// const MyComponent = () => (<div>MyComponent</div>);
// const RefsVibloChiThanhInComponentWrap = React.createClass({
//     componentDidMount() {
//         var el1 = this.refs.ref1;
//         var el2 = ReactDOM.findDOMNode(this.refs.ref2);
//         console.log(el1.value + el2.value);
//     },
//     render() {
//         return (
//             <div>
//                 <input ref="ref1" />
//                 <MyComponent ref="ref2" />
//             </div>
//         );
//     }
// });

// https://viblo.asia/p/reactjs-refs-3P0lPmkb5ox
// refs đặc trưng cho element
// class RefsVibloThanhTuan extends React.Component {
  
//     constructor(props) {
//       super(props);
//       this.submitHandle = this.submitHandle.bind(this);
//     }
  
//     submitHandle(e) { // khi submit
//       const {_title} = this.refs; // khai báo có ref="_title"; sử dụng bằng _title.value, _title.focus(), ...
//       e.preventDefault();
//       alert(_title.value); // _title đặc trưng cho input
//       _title.value = ''; // _title.value là giá trị của input
//       _title.focus(); // _title.focus() là focus() vào input
//     }
    
//     render() {
//       return (
//         <form onSubmit={this.submitHandle}>
//           <input ref="_title" type="text" placeholder="title" required />
//           <button>Add</button>
//         </form>
//       )
//     }
//   }

// Gửi dữ liệu hiện tại cho 1 function nào đó nằm ngoài component
// const notifyFunction = title => alert(title); // function nằm ngoài component, thực hiện thao tác với dữ liệu
// <RefsVibloInverseDataFlow notify={notifyFunction}/> có thể làm mù bằng phương pháp đặt props trùng tên với function
// class RefsVibloInverseDataFlowThanhTuan extends React.Component { // component chứa dữ liệu

//     constructor(props) {
//         super(props);
//         this.submitHandle = this.submitHandle.bind(this);
//     }

//     submitHandle(e) {
//         const {_title} = this.refs
//         e.preventDefault()
//         // callback
//         this.props.notify(_title.value) // nối dữ liệu từ trong component ra ngoài
//         _title.value = ''
//         _title.focus()

//         // kiểm tra sự tồn tại của notify
//         if (this.props.notify) {
//             this.props.notify(_title.value)
//         }
//       }

//     render() {
//         return (
//             <form onSubmit={this.submitHandle}>
//                 <input ref="_title" type="text" placeholder="title" required />
//                 <button>Add</button>
//             </form>
//         )
//     }
// }

// kiểm tra sự tồn tại của notify
// kiểm tra sự tồn tại của function notifyFunction; PropTypes.func.isRequired
// RefsVibloInverseDataFlowThanhTuan.propTypes = {
//     notifyFunction: PropTypes.func
// }
// kiểm tra sự tồn tại giá trị trong props
// RefsVibloInverseDataFlowThanhTuan.defaultProps = {
//     notify: f => f
// }


// HOC kết hợp với ref
// Reactjs.org
// Forwarding: chuyển tiếp
// Refs: tham chiếu

function FancyButton(props) {
    return(
        <button classname="FancyButton">
            {/* là nội dung bên trong <FancyButton> tôi là props.children </FancyButton> */}
            {props.children} 
        </button>
    )
}

const FancyButton2 = React.forwardRef((props, ref) => (  
    <button ref={ref} className="FancyButton2">    
        {props.children}
        {props.ref}
    </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();

// trường hợp 1 function chứa class mang tên nó với render() là 1 component được khai báo tại đối số của function
// function có 1 đối số
// class mang tên giống nó trả về 1 component mang tên đối số của function chứa class
// kết quả trả về là class mang tên giống nó vừa được khai báo
var WrappedComponent = () => (<div>Wrapped</div>);
function logProps(WrappedComponent) {  

    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            return <WrappedComponent {...this.props} />;    
        }
    }

  return LogProps;
}

class ForwardingRefs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div>
                {/* Chí Thanh Viblo
                <RefsVibloChiThanhTraditional></RefsVibloChiThanhTraditional>
                <RefsVibloChiThanhUsingRef></RefsVibloChiThanhUsingRef>
                <RefsVibloChiThanhUsingRefShort></RefsVibloChiThanhUsingRefShort> */}
                {/* <RefsVibloChiThanhInComponentWrap></RefsVibloChiThanhInComponentWrap> */}
                {/* <br/>
                
                Thanh Tuấn Viblo
                <RefsVibloThanhTuan></RefsVibloThanhTuan>
                <RefsVibloInverseDataFlowThanhTuan notify={notifyFunction} />
                <br/> */}
                
                ReactJS.org 
                <br/>
                <FancyButton>Hello</FancyButton>
                <FancyButton2 ref={ref}>Click me!</FancyButton2>
                <logProps WrappedComponent={WrappedComponent}></logProps>
            </div>
        )
    }
}

export default ForwardingRefs;

// 1
// Để sử dụng được kiểu khai báo này
// <FancyButton>Hello</FancyButton>
//
// <FancyButton>{props.children}</FancyButton>
// <button>Hello</button>
//
// <Component>|Hello|</Component> sẽ in ra <div><button>Click</button><p>|{props.children}|</p></div>
// Dữ liệu được đặt giữa component sẽ được sử dụng trong phần render() của chính component đó

// 2
// Để sử dụng kiểu khai báo này
// <FancyButton ref={ref}>Hello</FancyButton>
// <button ref={ref}>Hello</button>
//
// Dữ liệu được đặt ở props của component sẽ được sử dụng trong phần 
// render() của chính component đó vị trí props của phần tử nào đó trong component



// Chí Thanh
// refs sẽ đặc trưng cho element khi tương tác ở code js
// bỏ qua 1 callback cho ref bằng cách đặt tên cho node đó

// Thanh Tuấn
// Gửi dữ liệu hiện tại cho 1 function nào đó nằm ngoài component
// kiểm tra sự tồn tại của notify 
// kiểm tra sự tồn tại giá trị trong props

// ForwardingRefsToDOM
// HOC kết hợp với ref