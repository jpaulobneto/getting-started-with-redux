import { connect } from 'react-redux';
import FilterLink from '../../components/FilterLink';
import { setVisibilityFilter } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onFilterClick: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilterLink);
