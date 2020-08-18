import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat')); // Pacman

// set time live of cookies
// 2592000 second = 30 day
// const cookies = new Cookies();
const value = 'cookie nè';
cookies.set('cookieName', {key: value}, {path: '/', expires: new Date(Date.now()+2592000)});

class ReactjsCookie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myCat: ''
        }
    }
    componentDidMount() {
        this.setState({ myCat: cookies.get('myCat') }); // nếu không set time, giá trị maxAge sẽ = session
    }
    render(){
        return(
            <div>
                {this.state.myCat}
            </div>
        )
    }
}

export default ReactjsCookie;