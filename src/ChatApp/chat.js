import React from 'react';
import firebase from '../firebaseConnect';

import './chat.css';
import MyAvatar from './images/BinhAn.jpg';
import BinhAnAvatar from './images/BinhAn.jpg';
import LanHuongAvatar from './images/LanHuong.jpg';
import BaTaiAvatar from './images/BaTai.jpg';
import EunAranAvatar from './images/EunAran.jpg';
import HoangNhiAvatar from './images/HoangNhi.jpg';
import HoangThienAvatar from './images/HoangThien.jpg';
import NhatHoangAvatar from './images/NhatHoang.jpg';
import PhuongEllaAvatar from './images/PhuongElla.jpg';
import PhuongLienAvatar from './images/PhuongLien.jpg';
import ThaoNguyenAvatar from './images/ThaoNguyen.jpg';

var messages = [
     {
        avatar: '/static/media/BinhAn.46d86a79.jpg',
        username: 'Bình An',
        messenge: 'Tạm biệt! Gặp lại sau.'
    },
    {
        avatar: '/static/media/LanHuong.5f20ace5.jpg',
        username: 'Lan Hương',
        messenge: 'Tôi khỏe. Bạn sao?'
    },
    {
        avatar: '/static/media/BinhAn.46d86a79.jpg',
        username: 'Bình An',
        messenge: 'Tôi cũng vậy.'
    }
];

// function Messages() {
//     messages.map((x)=>{return( <li><img src={x.avatar} alt={x.username}/><p>{x.messenge}</p></li> )})
// };

class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            //avatar: '/static/media/BinhAn.46d86a79.jpg',
            myId: 1,
            //username: 'Bình An',
            avatar: '/static/media/LanHuong.5f20ace5.jpg',
            username: 'Lan Hương',
            myOnline: [],
            messages: [], 
            input: ''
        };

        this.inputHandle = this.inputHandle.bind(this);
        this.sendHandle = this.sendHandle.bind(this);
    }
    
    componentDidMount() {

        // this write on DidMount but always update
        const fmessages = firebase.database().ref('messages/1011');
        
        // is true 1
        fmessages.on('value', (snapshot) => {
            let data = snapshot.val(); // console.log(data);
            this.setState({ messages: data });
        });

        // // this write on DidMount but always update
        // const umessages = firebase.database().ref('user');
        
        // // is true 1
        // umessages.on('value', (snapshot) => {
        //     let data = snapshot.val(); // console.log(data);
        //     var myUser;
        //     for(const [key,index] of data.entries()){
        //         if(key===1) myUser = index; 
        //     }

        //     var myOnline = [];
        //     myUser.friends.map( x => {
        //         this.state.appOnline.map( o => { if(x === o) { myOnline.push(x) } } );
        //     });

        //     this.setState({ myOnline: myOnline });

        //     var myOnlineFullDetails = [];
        //     this.state.myOnline.map(x=>{
        //         for(const [key,index] of data.entries()){
        //             if(key===x) myOnlineFullDetails.push(index); 
        //         };
        //     });
        //     this.setState({ myOnlineFullDetails: myOnlineFullDetails });
        // });

        // tat ca friends []
        // tim trong user tung firends[] kiem tra status neu online thi dua vao onlineFriends[]
        // show ra onlineFriends rai return
        
        const omessages = firebase.database().ref('user/'+ this.state.myId +'/onlinefriends');
        omessages.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({ myOnline: data })
        });


        // data
        // 1101: {
        //     1: { avatar: "binhan.jpg", message: "Chào bạn!", username: "Bình An!" },
        //     2: { avatar: "lanhuong.jpg", message: "Chào bạn! Bạn khỏe không?", username: "Lan Hương"}
        // }

    }
    inputHandle=(event)=>{
        this.setState({ input: event.target.value });
    } 
    sendHandle=(event)=>{
        event.preventDefault();

        // firebase.database().ref('messages/' + this.state.roomId).set({
        //     username: this.state.username,
        //     avatar: this.state.avatar,
        //     message : this.state.input
        //   });

        // Object.values(this.state.messages).map(
        //     x => x.map(
        //             y => { y }
        //         )
        // )

        var messageId = 0;
        messageId = this.state.messages.length + 1;

        if(this.state.input.trim()!=='' && messageId!==0 ){
            firebase.database().ref('messages/1011/' + messageId).set({
                username: this.state.username,
                avatar: this.state.avatar,
                message : this.state.input
            });
        }

        this.setState({ input: '' });

        // kiểm tra tính đúng đắn của dữ liệu
        // thay đổi dữ liệu bảng cuộc trò chuyện của đối tượng tôi và đối tượng bạn
    }
    onChooseFriend=()=>{
        // tìm kiếm cuộc trò chuyện
        // xuất ra cuộc trò chuyện tại khung trò chuyện
    }
    
    render(){

        
        return(
            <div class="contain main-messenger">
                <div class="row top-bar">
                </div>
                <div class="row center-bar">
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Hi</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Tính làm gì, qua nhà bà Thi chơi nữa hả?</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Không! Ông có nhà không?</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Có sao dị!</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Xíu tui qua nhà ông học nhóm nha!</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Ok, nhớ mua 2 ly nước mía! Tui bao..</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Có luôn!</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Hi</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Tính làm gì, qua nhà bà Thi chơi nữa hả?</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Không! Ông có nhà không?</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Có sao dị!</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Xíu tui qua nhà ông học nhóm nha!</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Ok, nhớ mua 2 ly nước mía! Tui bao..</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Có luôn!</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Hi</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Tính làm gì, qua nhà bà Thi chơi nữa hả?</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Không! Ông có nhà không?</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Có sao dị!</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Xíu tui qua nhà ông học nhóm nha!</p></span>
                    <span><img src="/static/media/BinhAn.46d86a79.jpg" alt="Bình An"/><p>Ok, nhớ mua 2 ly nước mía! Tui bao..</p></span>
                    <span><img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/><p>Có luôn!</p></span>
                
                </div>
                <div class="row bottom-bar">
                    <img src="/static/media/LanHuong.5f20ace5.jpg" alt="Yến Phượng"/>
                    <form>
                        <textarea type="text"/>
                        <input type="submit" value="Gửi"/>
                    </form>
                </div>
            </div>
        )
        
        // return(
        //     <div>
        //         <div class="messenger-contain">
        //             <div class="messenger-containt-top">
        //                 <div class="messenger-left-bar">
        //                     {
        //                         // this.state.myOnline.map(x => {
        //                         //     return (    <span class={x.background}><img src={x.avatar} alt={x.username}/>{x.username}</span>   )
        //                         // })
        //                         Object.values(this.state.myOnline).map(x=> {return (    <span class={x.background}><img src={x.avatar} alt={x.username}/>{x.username}</span>   )} )
        //                     }
        //                     <span class="bg1"><img src={LanHuongAvatar} alt="Lan Hương"/>Lan Hương</span>
        //                     <span class="bg2"><img src={HoangNhiAvatar} alt="Hoàng Nhi"/>Hoàng Nhi</span>
        //                     <span class="bg3"><img src={NhatHoangAvatar} alt="Nhật Hoàng"/>Nhật Hoàng</span>
        //                     <span class="bg4"><img src={EunAranAvatar} alt="Eun Aran"/>Eun Aran</span>
        //                     <span class="bg5"><img src={HoangThienAvatar} alt="Hoàng Thiện"/>Hoàng Thiện</span>
        //                     <span class="bg6"><img src={ThaoNguyenAvatar} alt="Thảo Nguyên"/>Thảo Nguyên</span>
        //                     <span class="bg7"><img src={PhuongLienAvatar} alt="Phượng Liên"/>Phượng Liên</span>
        //                     <span class="bg8"><img src={PhuongEllaAvatar} alt="Phương Ella"/>Phương Ella</span>
        //                     <span class="bg9"><img src={BaTaiAvatar} alt="Bá Tài"/>Bá Tài</span>
        //                     <span><img src={LanHuongAvatar} alt="Lan Hương"/>Lan Hương</span>
        //                     <span><img src={HoangNhiAvatar} alt="Lan Hương"/>Hoàng Nhi</span>
        //                     <span><img src={NhatHoangAvatar} alt="Lan Hương"/>Nhật Hoàng</span>
        //                     <span><img src={EunAranAvatar} alt="Lan Hương"/>Eun Aran</span>
        //                     <span><img src={HoangThienAvatar} alt="Lan Hương"/>Hoàng Thiện</span>
        //                     <span><img src={ThaoNguyenAvatar} alt="Lan Hương"/>Thảo Nguyên</span>
        //                     <span><img src={PhuongLienAvatar} alt="Lan Hương"/>Phượng Liên</span>
        //                     <span><img src={PhuongEllaAvatar} alt="Lan Hương"/>Phương Ella</span>
        //                     <span><img src={BaTaiAvatar} alt="Lan Hương"/>Bá Tài</span>
        //                     <span><img src={LanHuongAvatar} alt="Lan Hương"/>Lan Hương</span>
        //                     <span><img src={HoangNhiAvatar} alt="Lan Hương"/>Hoàng Nhi</span>
        //                     <span><img src={NhatHoangAvatar} alt="Lan Hương"/>Nhật Hoàng</span>
        //                     <span><img src={EunAranAvatar} alt="Lan Hương"/>Eun Aran</span>
        //                     <span><img src={HoangThienAvatar} alt="Lan Hương"/>Hoàng Thiện</span>
        //                     <span><img src={ThaoNguyenAvatar} alt="Lan Hương"/>Thảo Nguyên</span>
        //                     <span><img src={PhuongLienAvatar} alt="Lan Hương"/>Phượng Liên</span>
        //                     <span><img src={PhuongEllaAvatar} alt="Lan Hương"/>Phương Ella</span>
        //                     <span><img src={BaTaiAvatar} alt="Lan Hương"/>Bá Tài</span>
        //                     <span><img src={LanHuongAvatar} alt="Lan Hương"/>Lan Hương</span>
        //                     <span><img src={HoangNhiAvatar} alt="Lan Hương"/>Hoàng Nhi</span>
        //                     <span><img src={NhatHoangAvatar} alt="Lan Hương"/>Nhật Hoàng</span>
        //                     <span><img src={EunAranAvatar} alt="Lan Hương"/>Eun Aran</span>
        //                     <span><img src={HoangThienAvatar} alt="Lan Hương"/>Hoàng Thiện</span>
        //                     <span><img src={ThaoNguyenAvatar} alt="Lan Hương"/>Thảo Nguyên</span>
        //                     <span><img src={PhuongLienAvatar} alt="Lan Hương"/>Phượng Liên</span>
        //                     <span><img src={PhuongEllaAvatar} alt="Lan Hương"/>Phương Ella</span>
        //                     <span><img src={BaTaiAvatar} alt="Lan Hương"/>Bá Tài</span>
        //                     <span><img src={LanHuongAvatar} alt="Lan Hương"/>Lan Hương</span>
        //                     <span><img src={HoangNhiAvatar} alt="Lan Hương"/>Hoàng Nhi</span>
        //                     <span><img src={NhatHoangAvatar} alt="Lan Hương"/>Nhật Hoàng</span>
        //                     <span><img src={EunAranAvatar} alt="Lan Hương"/>Eun Aran</span>
        //                     <span><img src={HoangThienAvatar} alt="Lan Hương"/>Hoàng Thiện</span>
        //                     <span><img src={ThaoNguyenAvatar} alt="Lan Hương"/>Thảo Nguyên</span>
        //                     <span><img src={PhuongLienAvatar} alt="Lan Hương"/>Phượng Liên</span>
        //                     <span><img src={PhuongEllaAvatar} alt="Lan Hương"/>Phương Ella</span>
        //                     <span><img src={BaTaiAvatar} alt="Lan Hương"/>Bá Tài</span>
        //                 </div>
        //                 <div class="messenger-ground">
        //                     <ul>
        //                         { 
        //                             this.state.messages.map(x=>{
        //                                 return ( <li><img src={x.avatar} alt={x.username}/><p>Firebase {x.message}</p></li> )
        //                             })

        //                         }
        //                         { messages.map( x=>{ return( <li><img src={x.avatar} alt={x.username}/><p>Static {x.messenge}</p></li> ); } ) }
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Tạm biệt! Hẹn gặp bạn sau.</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Chào bạn!</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Bạn khỏe không?</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Chào bạn! Tôi khỏe.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Dạo này công việc bạn thế nào?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Dạo này công việc của mình không ổn lắm.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>Sao vậy?</p></li>
        //                         <li><img src={LanHuongAvatar} alt="Lan Hương"/><p>Vì khách rất đông, mình không thể nào xoay sở kịp.</p></li>
        //                         <li><img src={MyAvatar} alt="Bình An"/><p>...</p></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <form class="messenger-containt-bottom" onSubmit={this.sendHandle}>
        //                 <input class="messenger-input" type="text" spellcheck="false" value={this.state.input} onChange={this.inputHandle}/>                        
        //                 <input class="btn-send-messenger" type="submit" value="Gửi"/>
        //             </form>                    
        //         </div>
        //     </div>
        // )
    }
}

export default Chat;

// Firebase connect
//import firebase from 'firebase';
//
// const mcConfig = {
    // apiKey: "AIzaSyB99gzeEDYi3vsOLgtKULomK8riCH-8D3I",
    // authDomain: "moneycaculator-360b9.firebaseapp.com",
    // databaseURL: "https://moneycaculator-360b9.firebaseio.com",
    // projectId: "moneycaculator-360b9",
    // storageBucket: "moneycaculator-360b9.appspot.com",
    // messagingSenderId: "398455561201",
    // appId: "1:398455561201:web:91865895cf357c31624250",
    // measurementId: "G-FEF80L1P7X"
// };
//
// firebase.initializeApp(mcConfig);
// export default firebase;


// Get firebase data 
// this write on DidMount but always update
// const fmessages = firebase.database().ref('messages/1011');
//
// is true 1
//fmessages.on('value', (snapshot) => {
//	let data = snapshot.val(); // console.log(data);
//	this.setState({ messages: data });
//});


// Set firebase data 
//firebase.database().ref('messages/1011/' + messageId).set({
//	username: this.state.username,
//	avatar: this.state.avatar,
//	message : this.state.input
//});