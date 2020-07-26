import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateMain } from '../services/main/actions';

const MainVarReactRedux = (updateMain, show, sort) => {

    var clickHandle = () => {
        updateMain(!show);
        console.log(show);
    }
    
    return(
        <div>
            {show}
            {sort}
            <button onClick={clickHandle}>btnShow</button>
        </div>
    );
}

MainVarReactRedux.propTypes = {
    updateSort: PropTypes.func.isRequired,
    updateMain: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };

const mapStateToProps = state => ({
    sort: state.sort.type,
    show: state.main.show
});

export default connect( 
    mapStateToProps , { updateMain } 
    )(MainVarReactRedux);
  