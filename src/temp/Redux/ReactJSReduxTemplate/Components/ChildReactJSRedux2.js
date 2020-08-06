import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
 
class ChildReactJSRedux2 extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
 
    render() {
        if(this.props.show)
            return(
                <div>Child component</div>
            )
        else 
            return(
                <div></div>
            )
    }
}
 
ChildReactJSRedux2.propTypes = {
    show: PropTypes.string.isRequired
};
 
var mapStatetpProps = state => ({
    show: state.main.show
});
 
export default connect(mapStatetpProps, {})(ChildReactJSRedux2);