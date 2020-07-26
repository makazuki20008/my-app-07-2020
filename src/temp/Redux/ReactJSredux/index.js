import React from 'react';
import { Provider } from 'react-redux';
import store from './services/store';
// import MainReactRedux from './components/mainclass';
// import MainVarReactRedux from './components/mainvar';
import Elem from './components/elementvar';
import Sort from './components/sort/index';

export const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);


const App = () => {
    return(
        <div>
            <Sort></Sort>
            <Elem po="p"></Elem>
        </div>
    )
};

class ReactJSRedux extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return(
            <Root>
                <App />
            </Root>
        )
    }
};

export default ReactJSRedux;