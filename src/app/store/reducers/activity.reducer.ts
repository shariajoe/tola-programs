import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Activity } from '../models/activity.model';
import { ActivityActions, ActivityActionTypes } from '../actions/activity.actions';

export interface activitiesState extends EntityState<Activity> {
  // additional entities state properties
  allActivitiesLoaded: boolean;
}

export const adapter: EntityAdapter<Activity> = createEntityAdapter<Activity>();

export const initialActivitiestate: activitiesState = adapter.getInitialState({
  // additional entity state properties
  allActivitiesLoaded: false
});

export function activityReducer(
  state = initialActivitiestate,
  action: ActivityActions
): activitiesState {
  switch (action.type) {
    case ActivityActionTypes.AddActivity: {
      return adapter.addOne(action.payload.activity, state);
    }

    case ActivityActionTypes.UpsertActivity: {
      return adapter.upsertOne(action.payload.activity, state);
    }

    case ActivityActionTypes.AddActivities: {
      return adapter.addMany(action.payload.activities, state);
    }

    case ActivityActionTypes.UpsertActivities: {
      return adapter.upsertMany(action.payload.activities, state);
    }

    case ActivityActionTypes.UpdateActivity: {
      return adapter.updateOne(action.payload.activity, state);
    }

    case ActivityActionTypes.UpdateActivities: {
      return adapter.updateMany(action.payload.activities, state);
    }

    case ActivityActionTypes.DeleteActivity: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ActivityActionTypes.DeleteActivities: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ActivityActionTypes.LoadActivities: {
      return adapter.addAll(action.payload.activities, state);
    }

    case ActivityActionTypes.AllActivitiesLoaded: {
      return adapter.addAll(action.payload.activities, {...state, allActivitiesLoaded:true});
    }

    case ActivityActionTypes.ClearActivities: {
      return adapter.removeAll(state);
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
