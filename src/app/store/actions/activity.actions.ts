import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Activity } from '../models/activity.model';

export enum ActivityActionTypes {
  LoadActivities = '[Activity] Load Activities',
  AddActivity = '[Activity] Add Activity',
  UpsertActivity = '[Activity] Upsert Activity',
  AddActivities = '[Activity] Add Activities',
  UpsertActivities = '[Activity] Upsert Activities',
  UpdateActivity = '[Activity] Update Activity',
  UpdateActivities = '[Activity] Update Activities',
  DeleteActivity = '[Activity] Delete Activity',
  DeleteActivities = '[Activity] Delete Activities',
  ClearActivities = '[Activity] Clear Activities',
  AllActivitiesRequested = '[Activity] All Activities Requested',
  AllActivitiesLoaded = '[Activity] All Activities Loaded',
  ActivitySaved = '[Edit Activity Dialog] Activity Saved',
}

export class LoadActivities implements Action {
  readonly type = ActivityActionTypes.LoadActivities;

  constructor(public payload: { activities: Activity[] }) {}
}

export class AddActivity implements Action {
  readonly type = ActivityActionTypes.AddActivity;

  constructor(public payload: { activity: Activity }) {}
}

export class UpsertActivity implements Action {
  readonly type = ActivityActionTypes.UpsertActivity;

  constructor(public payload: { activity: Activity }) {}
}

export class AddActivities implements Action {
  readonly type = ActivityActionTypes.AddActivities;

  constructor(public payload: { activities: Activity[] }) {}
}

export class UpsertActivities implements Action {
  readonly type = ActivityActionTypes.UpsertActivities;

  constructor(public payload: { activities: Activity[] }) {}
}

export class UpdateActivity implements Action {
  readonly type = ActivityActionTypes.UpdateActivity;

  constructor(public payload: { activity: Update<Activity> }) {}
}

export class UpdateActivities implements Action {
  readonly type = ActivityActionTypes.UpdateActivities;

  constructor(public payload: { activities: Update<Activity>[] }) {}
}

export class DeleteActivity implements Action {
  readonly type = ActivityActionTypes.DeleteActivity;

  constructor(public payload: { id: string }) {}
}

export class DeleteActivities implements Action {
  readonly type = ActivityActionTypes.DeleteActivities;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearActivities implements Action {
  readonly type = ActivityActionTypes.ClearActivities;
}

export class AllActivitiesRequested implements Action {

  readonly type = ActivityActionTypes.AllActivitiesRequested;

}

export class AllActivitiesLoaded implements Action {

  readonly type = ActivityActionTypes.AllActivitiesLoaded;

  constructor(public payload: { activities: Activity[] }) {}

}

export class ActivitySaved implements Action {

  readonly type = ActivityActionTypes.ActivitySaved;

  constructor(public payload: { activity: Update<Activity> }) {}
}

export type ActivityActions =
 LoadActivities
 | AddActivity
 | UpsertActivity
 | AddActivities
 | UpsertActivities
 | UpdateActivity
 | UpdateActivities
 | DeleteActivity
 | DeleteActivities
 | ClearActivities
 | AllActivitiesRequested
 | AllActivitiesLoaded
 | ActivitySaved;
