import { programReducer, initialProgramState } from './program.reducer';

describe('Program Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = programReducer(initialProgramState, action);

      expect(result).toBe(initialProgramState);
    });
  });
});
