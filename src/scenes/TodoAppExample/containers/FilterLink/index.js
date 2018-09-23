import React from 'react';
import { connect } from 'react-redux';
import Link from '../../components/Link';
import { setVisibilityFilter } from '../../actions';

const FilterLink = ({
  filter, visibilityFilter, children, onFilterClick,
}) => (
  <Link active={filter === visibilityFilter} onClick={() => onFilterClick(filter)}>
    {children}
  </Link>
);

const mapStateToProps = state => ({
  visibilityFilter: state.todoApp.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onFilterClick: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLink);
