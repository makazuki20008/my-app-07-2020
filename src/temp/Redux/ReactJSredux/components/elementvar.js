import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

var Elem = ({type,po}) => {return(<div>This show: {type} - {po}</div>)};

Elem.propTypes = ({
    type: PropTypes.string.isRequired
});

var mapStatetoProps = state => ({
    type: state.sort.type
});
export default connect(mapStatetoProps)(Elem);