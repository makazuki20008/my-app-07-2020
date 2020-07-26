import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSort } from '../../services/sort/actions';
import Selectbox from './select';

import {updateMain} from '../../services/main/actions';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' }
];

const Sort = ({ updateSort, sort }) => {
    return(
  <div className="sort">
    Order by

    {/* value hiển thị sẵn */}
    {/* lấy đối số tại hành động change */}
    {/* thay đổi data store với value */}
    <Selectbox options={sortBy} handleOnChange={value => {updateSort(value); }} />
  </div>
)};

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  // sort là state của store
  // state này được tạo tại combineReducers

  // type là state của sort
  // state này được tạo tại reducer của sort
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
