const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

export const decrement = () => ({ type: DECREMENT });
export const increment = () => ({ type: INCREMENT });

export default {
  decrement,
  increment,
};
