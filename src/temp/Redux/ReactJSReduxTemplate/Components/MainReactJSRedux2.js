import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setShow } from '../services/main/actions';
 
class MainReactJSRedux2 extends React.Component {
    constructor(props){
        super(props);
        this.state= {};
    }
    clickHandle = () => {
        this.props.setShow(!this.props.show);
    }
    render() {
        if(this.props.show){
            return(<div>MainReactJSRedux2<br/><button style={{ backgroundColor: 'lightgreen' }} onClick={this.clickHandle}>Hide child</button></div>);
        }
        else
        {
            return(<div>MainReactJSRedux2<br/><button style={{ backgroundColor: 'red' }} onClick={this.clickHandle}>Show child</button></div>)
        }
    }
 
}
 
MainReactJSRedux2.propTypes = {
    setShow: PropTypes.func.isRequired,
    show: PropTypes.string.isRequired
};
 
var mapStatetoProps = state => ({
    show: state.main.show
});
 
export default connect( mapStatetoProps , { setShow } )(MainReactJSRedux2);