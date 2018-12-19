import { activityReducer, initialActivityState } from './activity.reducer';

describe('Activity Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = activityReducer(initialActivityState, action);

      expect(result).toBe(initialActivityState);
    });
  });
});
