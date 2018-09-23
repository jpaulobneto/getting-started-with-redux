import { counter } from './reducer';
import { decrement, increment } from './actions';

describe('Reducer | Counter Example', () => {
  const unknown = () => ({ type: 'SOMETHING_ELSE' });

  describe('counter', () => {
    it('returns the current state if the action is unknown', () => {
      expect(counter(0, unknown())).toEqual(0);
    });

    it('returns the initial state if current state is undefined', () => {
      expect(counter(undefined, unknown())).toEqual(0);
    });

    it('increments counter', () => {
      expect(counter(0, increment())).toEqual(1);
      expect(counter(1, increment())).toEqual(2);
    });

    it('decrements counter', () => {
      expect(counter(2, decrement())).toEqual(1);
      expect(counter(1, decrement())).toEqual(0);
    });
  });
});
