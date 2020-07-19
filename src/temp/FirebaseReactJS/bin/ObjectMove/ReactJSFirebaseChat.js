import React from 'react';
import firebase from '../../../../firebaseConnect';

// firebase database example
// messages: {
//     '1101': {
//         '1': { avatar: 'BinhAnAvatar', username: 'Bình An', message: 'Chào bạn!' },
//         '2': { avatar: 'LanHuongAvatar', username: 'Lan Hương', message: 'Chào bạn! Bạn khỏe không?' },
//         '3': { avatar: 'BinhAnAvatar', username: 'Bình An', message: 'Mình khỏe, cảm ơn bạn!'}
//     }
// }

class FirebaseChat extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            messenges: [],
            input: ''            
        }

        this.inputHandle = this.inputHandle.bind(this);
        this.sendHandle = this.sendHandle.bind(this);
    }

    // get firebase
    componentDidMount() {

        const fmessages = firebase.database().ref('messages/');
        
        // is true 1
        fmessages.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({ messages: data });
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

    // push firebase
    sendHandle=(event)=>{
        event.preventDefault();
        var messageId = 0;

        Object.values(this.state.messages).map(
            x => console.log( messageId = x.length )
        )

        if(this.state.input!=='' && messageId!==0 ){
            firebase.database().ref('messages/1011/' + messageId).set({
                username: this.state.username,
                avatar: this.state.avatar,
                message : this.state.input
            });
        }
    }

    render(){
        return(
            <div>
            
                <ul class="message-ground">
                    { 
                                            
                        Object.values(this.state.messages).map(
                            x => x.map(
                                    y => { return ( <li><img src={y.avatar} alt={y.username}/><p>Firebase {y.message}</p></li> ) }
                                )
                        )

                    }
                </ul>

                <form class="messenger-containt-bottom" onSubmit={this.sendHandle}>
                    <textarea class="messenger-input" type="text" spellcheck="false" value={this.state.input} onChange={this.inputHandle}/>                        
                    <input class="btn-send-messenger" type="submit" value="Gửi"/>
                </form>
                
            </div>
        )
    }
}

export default FirebaseChat;