import { connect } from 'react-redux';
import CounterExample from '../../CounterExample';

const mapStateToProps = state => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(CounterExample);
