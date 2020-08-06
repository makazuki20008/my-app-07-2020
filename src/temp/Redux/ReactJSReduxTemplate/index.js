import React from 'react';
import { Provider } from 'react-redux';
import MainReactJSRedux2 from './components/MainReactJSRedux2';
import ChildReactJSRedux2 from './components/ChildReactJSRedux2';
import store from './services/store';
 
const Root = ({ children, initialState = {} }) => (
    <Provider store={store(initialState)}>{children}</Provider>
);
 
const App = () => {
    return(
        <div>
            <MainReactJSRedux2></MainReactJSRedux2>
            <ChildReactJSRedux2></ChildReactJSRedux2>
        </div>
    )
}
 
class ReactJSRedux2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <Root>
                <App />
            </Root>
        )
    }
}
 
export default ReactJSRedux2;
