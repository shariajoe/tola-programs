import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Activity } from '../../models/activity.model';

export enum ActivityActionTypes {
  LoadActivities = '[Activity] Load Activities',
  AllActivitiesRequested = '[Activity] All Activities Requested',
  AllActivitiesLoaded = '[Activity] All Activities Loaded',

  AddActivity = '[Activity] Add Activity',
  AddActivityFailure = '[Activity] Add Failure',
  AddActivitySuccess = '[Activity] Add Activity Success',

  UpdateActivity = '[Activity] Update Activity',
  UpdateActivitySuccess = '[Activity] Update Activity Success',
  UpdateActivityFailure = '[Activity] Update Activity Failure',

  DeleteActivity = '[Activity] Delete Activity',
  DeleteActivitySuccess = '[Activity] Delete Activity Success',
  DeleteActivityFailure = '[Activity] Delete Activity Failure',
  
  
}

export class LoadActivities implements Action {
  readonly type = ActivityActionTypes.LoadActivities;
}

export class AllActivitiesRequested implements Action {
  readonly type = ActivityActionTypes.AllActivitiesRequested;
}

export class AllActivitiesLoaded implements Action {

  readonly type = ActivityActionTypes.AllActivitiesLoaded;

  constructor(public payload: { activities: Activity[] }) {}
}

export class AddActivity implements Action {
  readonly type = ActivityActionTypes.AddActivity;

  constructor(public payload: { activity: Activity }) {}
}

export class AddActivitySuccess implements Action {
  readonly type = ActivityActionTypes.AddActivitySuccess;

  constructor(public payload: { activity: Activity }) {}
}

export class AddActivityFailure implements Action {
  readonly type = ActivityActionTypes.AddActivityFailure;

  constructor(public payload: { err: any }) {}
}

export class UpdateActivity implements Action {
  readonly type = ActivityActionTypes.UpdateActivity;

  constructor(public payload: { activity: Update<Activity> }) {}
}

export class UpdateActivitySuccess implements Action {
  readonly type = ActivityActionTypes.UpdateActivitySuccess;

  constructor(public payload: { activity: Update<Activity> }) {}
}

export class UpdateActivityFailure implements Action {
  readonly type = ActivityActionTypes.UpdateActivityFailure;

  constructor(public payload: { err: any }) {}
}

export class DeleteActivity implements Action {
  readonly type = ActivityActionTypes.DeleteActivity;

  constructor(public payload: { id: string }) {}
}

export class DeleteActivitySuccess implements Action {
  readonly type = ActivityActionTypes.DeleteActivitySuccess;

  constructor(public payload: { id: string }) {}
}

export class DeleteActivityFailure implements Action {
  readonly type = ActivityActionTypes.DeleteActivityFailure;

  constructor(public payload: { err: any }) {}
}


export type ActivityActions =
 LoadActivities
 | AddActivity
 | UpdateActivity
 | DeleteActivity
 | AllActivitiesRequested
 | AllActivitiesLoaded
 | AddActivityFailure
 | AddActivitySuccess
 | DeleteActivityFailure
 | DeleteActivitySuccess
 | UpdateActivitySuccess
 | UpdateActivityFailure;
