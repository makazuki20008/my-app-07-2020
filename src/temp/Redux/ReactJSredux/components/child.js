import React from 'react';
import { connect } from 'react-redux';

class ChildReactRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return(
            <div hidden={this.props.show}>child</div>
        )
    }
}
var mapStatetoProps = state => ({
    show: state.main.show
});
export default connect(mapStatetoProps)(ChildReactRedux);