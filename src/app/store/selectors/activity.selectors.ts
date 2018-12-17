import { createFeatureSelector, createSelector } from '@ngrx/store';
import { activitiesState } from '../reducers/activity.reducer';
import AppConfig from '../../config';

import * as fromActivity from '../reducers/activity.reducer';

export const selectActivitiesState = createFeatureSelector<activitiesState>(
  'activities'
);

export const selectAllActivities = createSelector(
  selectActivitiesState,
  fromActivity.selectAll
);

export const allActivitiesLoaded = createSelector(
  selectActivitiesState,
  activityState => activityState.allActivitiesLoaded
);

export const selectProgramActivities = (activityId: number) =>
  createSelector(
    selectAllActivities,
    activities =>
      activities.filter(
        activity =>
          activity.workflowlevel1 ===
          `${AppConfig.baseUrl}/workflowlevel1/${activityId}/`
      )
  );
