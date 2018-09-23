import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addTodo } from '../../actions';

const AddTodo = ({ dispatch }) => {
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
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add todo
      </Button>
    </React.Fragment>
  );
};

export default connect()(AddTodo);
