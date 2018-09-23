import freeze from 'deep-freeze';
import { ADD_TODO, TOGGLE_TODO } from './actions';
import { todos } from './reducer';

describe('Reducer | Todo App Example', () => {
  const unknown = () => ({ type: 'SOMETHING_ELSE' });

  describe('counter', () => {});

  describe('todos reducer', () => {
    it('returns the current state if the action is unknown', () => {
      const stateBefore = 0;
      const stateAfter = 0;
      expect(todos(stateBefore, unknown())).toEqual(stateAfter);
    });

    it('returns the initial state if current state is undefined', () => {
      const stateBefore = undefined;
      const stateAfter = [];
      expect(todos(stateBefore, unknown())).toEqual(stateAfter);
    });

    it('add a todo object', () => {
      const stateBefore = [];
      const stateAfter = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false,
        },
      ];
      const action = {
        type: ADD_TODO,
        payload: { text: 'Learn Redux' },
      };

      freeze(stateBefore);
      freeze(action);

      expect(todos(stateBefore, action)).toEqual(stateAfter);
    });

    it('toggles a todo', () => {
      const stateBefore = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false,
        },
        {
          id: 1,
          text: 'Go shopping',
          completed: false,
        },
      ];
      const stateAfter = [{ ...stateBefore[0] }, { ...stateBefore[1], completed: true }];
      const action = {
        type: TOGGLE_TODO,
        payload: { id: 1 },
      };

      freeze(stateBefore);
      freeze(action);

      expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
  });
});
