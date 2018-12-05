import {createFeatureSelector, createSelector} from '@ngrx/store';
import {activitiesState} from '../reducers/activity.reducer';

import * as fromActivity from '../reducers/activity.reducer';

export const selectActivitiesState = createFeatureSelector<activitiesState>("activities");


export const selectActivityById = (activityId:number) => createSelector(
  selectActivitiesState,
  activityState => activityState.entities[activityId]
);


export const selectAllActivities = createSelector(
  selectActivitiesState,
  fromActivity.selectAll
);

export const allActivitiesLoaded = createSelector(
  selectActivitiesState,
  activityState => activityState.allActivitiesLoaded
);

export const selectProgramActivities = (activityId:number) => createSelector(
  selectAllActivities,
  activities => activities.filter(activity => activity.workflowlevel1 === `https://dev-api.toladata.io/api/workflowlevel1/${activityId}/`)
);








