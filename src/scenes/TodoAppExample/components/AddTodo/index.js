import React from 'react';
import { Button } from 'react-bootstrap';

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

export default AddTodo;
