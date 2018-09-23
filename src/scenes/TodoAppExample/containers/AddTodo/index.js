import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addTodo } from '../../actions';

const AddTodo = ({ onAddClick }) => {
  let input;

  return (
    <React.Fragment>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <Button
        bsStyle="primary"
        onClick={() => {
          onAddClick(input.value);
          input.value = '';
        }}
      >
        Add todo
      </Button>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  onAddClick: text => dispatch(addTodo(text)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo);
