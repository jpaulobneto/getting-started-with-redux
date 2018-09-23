import { connect } from 'react-redux';
import CounterExample from '../../CounterExample';
import { increment } from '../../CounterExample/actions';

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterExample);
