import { programReducer, initialProgramState } from './program.reducer';
import * as fromActions from '../actions/program.actions';
import * as fromModels from '../models/program.model';

describe('Program Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = programReducer(initialProgramState, action);

      expect(result).toBe(initialProgramState);
    });
  });

  describe('Load Programs action', () => {
    it('should return the initial state of activity entities', () => {
      const action = new fromActions.AllProgramsRequested();
      const state = programReducer(initialProgramState, action);

      expect(state.entities).toEqual(initialProgramState.entities);
    });
  });

  describe('All Programs Loaded action', () => {
    it('should populate the entities from the array', () => {
      const programs: fromModels.Program[] = [
        { id: 1, name: 'Test 1' } as fromModels.Program,
        { id: 2, name: 'Test 2' } as fromModels.Program,
      ];

      const entities = { 1: programs[0], 2: programs[1] };
      const action = new fromActions.AllProgramsLoaded({ programs });
      const state = programReducer(initialProgramState, action);

      expect(state.entities).toEqual(entities);
    });
  });
});
