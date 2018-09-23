import { connect } from 'react-redux';
import CounterExample from '../../CounterExample';
import { decrement, increment } from '../../CounterExample/actions';

const mapStateToProps = state => ({
  value: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterExample);
