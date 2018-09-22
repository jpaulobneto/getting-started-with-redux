import counter from './reducer';

describe('Reducer | Counter', () => {
  it('returns the current state if the action is unknown', () => {
    const action = { type: 'SOMETHING_ELSE' };

    expect(counter(0, action)).toEqual(0);
  });

  it('returns the initial state if current state is undefined', () => {
    const action = { type: 'SOMETHING_ELSE' };

    expect(counter(undefined, action)).toEqual(0);
  });

  it('increments counter', () => {
    const action = { type: 'INCREMENT' };

    expect(counter(0, action)).toEqual(1);
    expect(counter(1, action)).toEqual(2);
  });

  it('decrements counter', () => {
    const action = { type: 'DECREMENT' };

    expect(counter(2, action)).toEqual(1);
    expect(counter(1, action)).toEqual(0);
  });
});
