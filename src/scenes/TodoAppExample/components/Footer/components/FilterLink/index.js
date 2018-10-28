import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={`/todo-app-example/${filter === 'all' ? '' : filter}`}
    activeStyle={{
      color: 'black',
      textDecoration: 'none',
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
