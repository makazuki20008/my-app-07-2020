import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateMain } from '../services/main/actions';
import ChildReactRedux from './child';

class MainReactRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    clickHandle=() => {
        this.props.updateMain(!this.props.show);
        console.log(this.props.show);
    }
    render() {
        return(
            <div>
                {this.props.show}
                {this.props.sort}
                <ChildReactRedux></ChildReactRedux><br/>
                <button onClick={this.clickHandle}>btnShow</button>
            </div>
        )
    }
}

MainReactRedux.propTypes = {
    updateSort: PropTypes.func.isRequired,
    updateMain: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };

const mapStateToProps = state => ({
    sort: state.sort.type,
    show: state.main.show
});

export default connect( mapStateToProps , { updateMain } )(MainReactRedux);
  