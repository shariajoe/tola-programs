import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Activity } from '../../models/activity.model';
import { ActivityActions, ActivityActionTypes } from '../actions/activity.actions';

export interface activitiesState extends EntityState<Activity> {
  // additional entities state properties
  allActivitiesLoaded: boolean;
}

export const adapter: EntityAdapter<Activity> = createEntityAdapter<Activity>();

export const initialActivityState: activitiesState = adapter.getInitialState({
  // additional entity state properties
  allActivitiesLoaded: false
});

export function activityReducer(
  state = initialActivityState,
  action: ActivityActions
): activitiesState {
  switch (action.type) {
    case ActivityActionTypes.AddActivitySuccess: {
      return adapter.addOne(action.payload.activity, state);
    }

    case ActivityActionTypes.UpdateActivity: {
      return adapter.updateOne(action.payload.activity, state);
    }

    case ActivityActionTypes.DeleteActivitySuccess: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ActivityActionTypes.LoadActivities: {
      return state;
    }

    case ActivityActionTypes.AllActivitiesLoaded: {
      return adapter.addAll(action.payload.activities, {...state, allActivitiesLoaded:true});
    }

    case ActivityActionTypes.AddActivityFailure: {
      return state;
    }

    case ActivityActionTypes.DeleteActivityFailure: {
      return state;
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
