import { activityReducer, initialActivityState } from './activity.reducer';
import * as fromActions from '../actions/activity.actions';
import * as fromModels from '../models/activity.model';
import { Update } from '@ngrx/entity';

describe('Activity Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = activityReducer(initialActivityState, action);

      expect(result).toBe(initialActivityState);
    });
  });

  describe('Load Activities action', () => {
    it('should return the initial state of activity entities', () => {
      const action = new fromActions.AllActivitiesRequested();
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(initialActivityState.entities);
    });
  });

  describe('All Activities Loaded action', () => {
    it('should populate the entities from the array', () => {
      const activities: fromModels.Activity[] = [
        { id: 1, name: 'Test 1' } as fromModels.Activity,
        { id: 2, name: 'Test 2' } as fromModels.Activity
      ];

      const entities = { 1: activities[0], 2: activities[1] };
      const action = new fromActions.AllActivitiesLoaded({ activities });
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(entities);
    });
  });

  describe('Add Activity action', () => {
    it('should return the initial state of the activity entities', () => {
      const activity = {
        id: 3,
        name: 'Test'
      } as fromModels.Activity;
      const action = new fromActions.AddActivity({ activity });
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(initialActivityState.entities);
    });
  });

  describe('Add Activity Success action', () => {
    it('should pupulate the entities with the added activity', () => {
      const activity = {
        id: 1,
        name: 'Test'
      } as fromModels.Activity;

      const expectedEntity = { 1: activity };
      const action = new fromActions.AddActivitySuccess({ activity });
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(expectedEntity);
    });
  });

  describe('Add Activity Fail action', () => {
    it('should return the initial state of activity entities', () => {
      const action = new fromActions.AddActivityFailure({ err: '' });
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(initialActivityState.entities);
    });
  });

  describe('Update Activity action', () => {
    it('should return the initial state of the activity entities', () => {
      const changes = { name: 'Test 3' };
      const updates: Update<fromModels.Activity> = {
        id: 2,
        changes
      };

      const action = new fromActions.UpdateActivity({ activity: updates });
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(initialActivityState.entities);
    });
  });

  describe('Update Activity Success action', () => {
    it('should update the activity', () => {
      const activity: fromModels.Activity[] = [
        { id: 1, name: 'Test 1' } as fromModels.Activity,
        { id: 2, name: 'Test 2' } as fromModels.Activity
      ];

      const changes = { name: 'Test 3' };
      const updates: Update<fromModels.Activity> = {
        id: 2,
        changes
      };

      const updatedActivity: fromModels.Activity = {
        id: 2,
        name: 'Test 3'
      } as fromModels.Activity;

      const entities = {
        1: activity[0],
        2: activity[1]
      };
      const previousState = { ...initialActivityState, entities };
      const action = new fromActions.UpdateActivitySuccess({
        activity: updates
      });
      const state = activityReducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.entities).toEqual({ ...entities, 2: updatedActivity });
    });
  });

  describe('Update Activity Failure action', () => {
    it('should return the initial state of the activity entities', () => {
      const action = new fromActions.UpdateActivityFailure({ err: '' });
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(initialActivityState.entities);
    });
  });

  describe('Delete Activity acton', () => {
    it('should set return the initial state of the activity entities', () => {
      const activity = {
        id: 1,
        name: 'Test'
      } as fromModels.Activity;

      const action = new fromActions.DeleteActivity({ id: activity.id });
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(initialActivityState.entities);
    });
  });

  describe('Delete Activity Success', () => {
    it('should depopulate the activity from activity entities', () => {
      const activity = {
        id: 1,
        name: 'Test'
      } as fromModels.Activity;
      const entities = { 1: activity };
      const previousState = { ...initialActivityState, entities };
      const action = new fromActions.DeleteActivitySuccess({ id: activity.id });
      const state = activityReducer(previousState, action);

      expect(state.entities).toEqual(initialActivityState.entities);
    });
  });

  describe('Delete Activity Fail action', () => {
    it('should return the previous state of activity entities', () => {
      const action = new fromActions.DeleteActivityFailure({ err: '' });
      const state = activityReducer(initialActivityState, action);

      expect(state.entities).toEqual(initialActivityState.entities);
    });
  });
});
